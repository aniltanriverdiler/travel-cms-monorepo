import { getPrisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = await getPrisma();
    const hotels = await prisma.hotel.findMany({
      include: {
        rooms: true,
      },
    });
    return NextResponse.json(hotels, { status: 200 });
  } catch (error) {
    console.error("Hotel API Error:", error); // Bu satırı ekleyin
    return NextResponse.json(
      { error: "Something went wrong!", details: error.message }, // details ekleyin
      { status: 500 }
    );
  }
}