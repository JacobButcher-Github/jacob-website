import Head from 'next/head';
import NavBar from "../components/NavBar"

export default function about() {
  return (
    <>
      <Head>
        <title>About - Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center text-mainText">

          <h1 className="text-7xl mt-16">About Me</h1>
          <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-8"></div>
          <p className='text-mainText w-1/3 text-xl'>
            I am a 26-year-old senior studying Computer Science at the University of Alabama at Birmingham (UAB).
          </p>
          <br />
          <p className='text-xl w-1/3 mt-4'>
            I originally graduated from UAB in 2020 with a Biomedical Sciences degree and worked in a lab for 3 years.
            In that time I got to help program and maintain our liquid handling robotics and helped develop a new Lab Information System.
          </p>
          <br />
          <p className='w-1/3 text-xl mt-4'>
            Suffice to say, I got more into the technological aspects of the lab, and got into Computer Science soon after. I eventually went back to school
            as the company I was at had no real ways for me to grow as a developer.
          </p>
          <br />
        </div>
      </div>
    </>
  )
}
