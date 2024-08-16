import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const QuickAbout = () => {
  return (
    <div className="flex flex-col items-center text-mainText font-motiva-sans">
      <h1 className="text-5xl mt-16">About Me</h1>
      <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-8"></div>

      <p className="text-mainText w-1/3 text-xl">
        I am a 26-year-old senior studying Computer Science at the University of
        Alabama at Birmingham (UAB).
      </p>
      <br />
      <p className="text-xl w-1/3 mt-4">
        I originally graduated from UAB in 2020 with a Biomedical Sciences degree and
        worked in a lab for 3 years. I transitioned to computer science after
        learning how fun coding was!
      </p>
      <Link
        href="/about"
        className="mt-5 flex items-center text-black bg-accentGreen px-5 py-2 rounded-md hover:bg-hoverAccentGreen font-medium"
      >
        <FaPlay className="mr-2" /> Read More
      </Link>
    </div>
  );
};

export default QuickAbout;
