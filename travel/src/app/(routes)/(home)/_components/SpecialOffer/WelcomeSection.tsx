"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function WelcomeSection() {
  return (
    <div className="bg-orange-100 mt-12">
      <div className="mx-auto container text-center py-16 px-6 lg:px-28">
        {/* Welcome Title Animation */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "WELCOME TO TRAVEL",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "SEYAHATE HOŞ GELDİNİZ",
            2000,
            "WILLKOMMEN BEI TRAVEL",
            2000,
            "BIENVENUE À TRAVEL",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl lg:text-4xl font-bold text-blue-600 mb-4"
          repeat={Infinity}
        />

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
          <motion.div
            whileTap={{ scale: 0.9, y: 15 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button className="bg-green-500 text-white py-6 px-8 rounded-lg hover:bg-green-600 transition cursor-pointer">
              Detail
            </Button>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9, rotate: -10 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Button className="bg-orange-500 text-white py-6 px-8 rounded-lg hover:bg-orange-600 transition cursor-pointer">
              Browse
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
