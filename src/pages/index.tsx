import Head from 'next/head';
import MainBanner from '../components/MainBanner'
import NavBar from "../components/NavBar"
import LinkBar from "../components/LinkBar"

export default function index() {
  return (
    <>
      <Head>
        <title>Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans" >
        <NavBar />
        <MainBanner />
        <div className="flex flex-col items-center">
          <h1 className="text-mainText font-bold font-motiva-sans mt-16">Quick Links</h1>
          <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-2"></div>
        </div>
        <LinkBar />
      </div >
    </>
  )
}


