"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Hotel = {
  id: string;
  name: string;
  rating: string;
  description: string;
  location: string;
  pricePerNight: number;
  photos: string[];
};

function HotelList() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data: Hotel[]) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  console.log(hotels);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-72 w-full rounded-lg" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 font-semibold">
          Something went wrong.
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="shadow-md">
              <CardHeader>
                <Image
                  src={hotel.photos[0]}
                  alt={hotel.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
                <CardTitle className="text-lg font-semibold mt-2">
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{hotel.rating}</p>
                <p className="text-gray-700">{hotel.description}</p>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-lg font-bold">${hotel.pricePerNight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelList;
