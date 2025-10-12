import { Button } from "@/components/ui/button";
import React from "react";

function WelcomeSection() {
  return (
    <div className="bg-orange-100 mt-12">
      <div className="mx-auto container text-center py-16 px-6 lg:px-28">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          WELCOME TO TRAVEL
        </h2>

        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>

        {/* Website Description */}
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover a world of unforgettable experiences with our all-in-one
          travel platform. From booking luxury hotels to renting cars and
          finding exclusive travel deals, we make every journey effortless and
          memorable. Whether you're planning a weekend getaway or a grand
          adventure, your next destination begins here.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition">
            Detail
          </Button>
          <Button className="bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition">
            Browse
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
