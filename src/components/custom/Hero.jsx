import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mx-56 gap-9">
        <h1 className="font-extrabold text-[40px] text-center mt-5">
          <span className="text-[#c9623f]">
            Discover Your Perfect Gateway with AI:
          </span>
          <br />
          Plan Your Dream Trip in Minutes
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Your personal AI travel assistant, curating trips to suit your
          interests and budget.
        </p>
        <Link to={"/create-trip"}>
          <Button>Get Started for Free..!!</Button>
        </Link>
      </div>
      <div className="flex justify-center mt-10 pb-5">
        <img src="/front1.png" className="h-[500] w-[750px] rounded-xl"/>
        
      </div>
    </>
  );
}

export default Hero;
