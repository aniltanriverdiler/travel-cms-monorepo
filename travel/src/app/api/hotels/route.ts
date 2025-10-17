import { getPrisma } from "@/lib/db";
import { NextResponse } from "next/server";

// Helper function to build dynamic Prisma filters based on query params
function buildFilters(searchParams: URLSearchParams) {
  const filters: any[] = [];

  const rating = searchParams.get("rating");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  // Price range filter
  if (priceMin || priceMax) {
    const priceFilter: any = {};
    const min = parseFloat(priceMin || "");
    const max = parseFloat(priceMax || "");

    if (!isNaN(min)) priceFilter.gte = min;
    if (!isNaN(max)) priceFilter.lte = max;

    if (Object.keys(priceFilter).length > 0) {
      filters.push({ pricePerNight: priceFilter });
    }
  }

  // Rating filter
  if (rating) {
    const ratingValue = parseFloat(rating);
    if (!isNaN(ratingValue)) {
      filters.push({ rating: { gte: ratingValue } });
    }
  }

  return filters;
}

// GET endpoint (hotel list + filtering)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filters = buildFilters(searchParams);

  try {
    const prisma = getPrisma(); // no need for 'await' unless getPrisma() is async

    const hotels = await prisma.hotel.findMany({
      where: filters.length > 0 ? { AND: filters } : {},
      // include: { rooms: true }, // Enable this only if you actually need room data
    });

    return NextResponse.json(hotels, { status: 200 });
  } catch (error: any) {
    console.error("Hotel API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong on the server." },
      { status: 500 }
    );
  }
}
