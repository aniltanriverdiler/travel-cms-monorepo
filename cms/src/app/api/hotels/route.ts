import { getPrisma } from "@/lib/db";
import { error } from "console";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const hotel = await prisma.hotel.create({
      data: {
        name: body.name,
        description: body.description,
        location: body.location,
        address: body.address,
        rating: body.rating || 0.0,
        photos: body.photos || [],
        pricePerNight: body.pricePerNight,
      },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("Post error:", error);
    return NextResponse.json(
      { error: "Something went wrong while creating the hotel!" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rating = searchParams.get("rating");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");
  const name = searchParams.get("name");
  const pageStr = searchParams.get("page") || "1";
  const page = Number(pageStr);
  const limit = 10;
  const skip = (page - 1) * limit;

  const filters = [];

  if (priceMin || priceMax) {
    const priceFilter: any = {};
    if (priceMin) {
      priceFilter.gte = Number(priceMin);
    }
    if (priceMax) {
      priceFilter.lte = Number(priceMax);
    }
    filters.push({ pricePerNight: priceFilter });
  }

  if (rating) {
    filters.push({ name: { contains: name, mode: "insensitive" } });
  }

  const whereClause = filters.length > 0 ? { AND: filters } : {};

  try {
    const prisma = getPrisma();
    const hotels = await prisma.hotel.findMany({
      where: whereClause,
      skip,
      take: limit,
      include: {
        rooms: true,
      },
    });

    const totalCount = await prisma.hotel.count({ where: whereClause });

    return NextResponse.json({ hotels, totalCount });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const prisma = getPrisma();
    const body = await request.json();
    const {
      id,
      name,
      description,
      location,
      address,
      rating,
      photos,
      pricePerNight,
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Hotel 'id' is required." },
        { status: 400 }
      );
    }

    const updatedHotel = await prisma.hotel.update({
      where: { id },
      data: {
        name,
        description,
        location,
        address,
        rating,
        photos,
        pricePerNight,
      },
    });

    return NextResponse.json(updatedHotel);
  } catch (error) {
    console.error("PUT error", error);
    return NextResponse.json(
      { error: "Something went wrong while updating the hotel!" },
      { status: 500 }
    );
  }
}
