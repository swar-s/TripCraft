import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Footer from './Footer'

const destinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80",
  },
];




function Hero() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col items-center gap-4 px-2 sm:px-6 md:px-16 w-full flex-grow max-w-screen-xl mx-auto">
        <h1 className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center break-words leading-tight w-full max-w-4xl">
          <span className="text-[#c9623f] block">
            Discover Your Perfect Gateway with AI:
          </span>
          <span className="block mt-2">Plan Your Dream Trip in Minutes</span>
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-500 text-center max-w-xs sm:max-w-md md:max-w-xl w-full">
          Your personal AI travel assistant, curating trips to suit your interests and budget.
        </p>
        <Link to={"/create-trip"} className="w-full flex justify-center">
          <Button className="w-full max-w-xs sm:w-auto">Get Started for Free..!!</Button>
        </Link>
        <div className="flex justify-center mt-6 pb-2 w-full">
          <img src="/front1.png" className="w-full max-w-[320px] sm:max-w-md md:max-w-2xl lg:max-w-3xl rounded-xl object-cover" alt="TripCraft Hero" />
        </div>
        {/* CTA and Down Arrow */}
        <div className="flex flex-col items-center mt-2 mb-2 animate-bounce-slow">
          <span className="text-gray-600 text-base font-medium">Scroll down to explore features</span>
          <svg className="w-7 h-7 text-gray-500 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {/* Example Destinations Grid */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 mt-2">Popular Destinations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            {destinations.map((dest) => (
              <div key={dest.name} className="flex flex-col items-center bg-white rounded-lg shadow p-2 hover:scale-105 transition-transform">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-md mb-1 transition-all duration-200" 
                />
                <span className="text-sm md:text-base font-medium text-gray-800">{dest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
