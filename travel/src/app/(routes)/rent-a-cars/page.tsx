import React from "react";
import RentacarList from "./_components/RentacarList";
import RentacarFilter from "./_components/RentacarFilter";

function RentACarsPage() {
  return (
    <main className="container mx-auto mt-5 p-4 flex flex-col gap-6">
      <RentacarFilter />
      <RentacarList />
    </main>
  );
}

export default RentACarsPage;
