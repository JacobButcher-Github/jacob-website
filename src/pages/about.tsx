import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen overflow-auto">
        <NavBar />

        <div className="flex flex-row items-start w-full">
          <div className="flex justify-end w-1/3 mr-20 mt-24">
            <Image
              src="/images/lean_back.jpg"
              alt="lean-back-img"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col items-center text-mainText w-1/3">
            <h1 className="text-7xl mt-16">About Me</h1>
            <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-8"></div>
            <p className="text-mainText text-xl">
              I am a 26-year-old MS of Computer Science student at Georgia Tech
              and a Software Developer at Dark Tower.
            </p>
            <br />
            <p className="text-xl mt-4">
              I originally graduated from University of Alabama at Birmingham
              (UAB) in 2020 with a Biomedical Sciences degree and worked in a
              lab for 3 years. While in the lab, I collaborated with IT services
              to program and maintain our liquid-handling robotics and
              contributed to the development of a new lab information system.
            </p>
            <br />
            <p className="text-xl mt-4">
              Despite this being my first experience with code and handling
              web-based information systems, it served as an important stepping
              stone and foundation for my eventual career switch into computer
              science.
            </p>
            <br />
            <p className="text-xl mt-4">
              I began picking up programming on the side, learning to code from
              online resources, and eventually returning to school full-time. I
              was able to pursue opportunities in software engineering and
              campus engagement. I graduated from UAB CS in Fall 2024.
            </p>
            <br />
            <p className="text-xl mt-4">
              I was a Software Engineering Intern at{" "}
              <Link
                href="https://www.geeksandnerds.com/"
                className="text-colorPrimary underline"
              >
                Geeks and Nerds
              </Link>
              , was the Secretary for ACM at UAB in Fall 2024 and I was the C
              tutor for our Systems Programming and Computer Organization &
              Assembly courses.
            </p>
            <p className="text-xl mt-4">
              I am currently a Software Developer at{" "}
              <Link
                href="https://getdarktower.com/"
                className="text-colorPrimary underline"
              >
                Dark Tower
              </Link>
              .
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
