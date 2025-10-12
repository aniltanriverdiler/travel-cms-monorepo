import { Button } from '@/components/ui/button';
import React from 'react'

function AboutUs() {
  return (
    <div className="bg-orange-100">
      <div className="mx-auto container text-center py-16 px-6 lg:px-28">

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          WELCOME TO TRAVEL
        </h2>
        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>

        {/* About Page Description */}
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          At Travel, we believe every journey is more than just reaching a
          destination — it’s about creating unforgettable experiences. From
          exploring vibrant cities to relaxing in luxurious resorts, our mission
          is to make travel seamless, inspiring, and accessible for everyone.
          Whether you’re booking a hotel, renting a car, or searching for the
          best travel deals, we’re here to simplify every step of your journey.
        </p>

        <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our platform brings together the best destinations, exclusive offers,
          and trusted services to help you travel smarter. We partner with top
          hotels, car rental agencies, and tour operators to ensure every trip
          meets the highest standards of comfort and convenience. At Travel, our
          passion for exploration drives us to deliver more than just trips —
          we deliver memories that last a lifetime.
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
  )
}

export default AboutUs;
