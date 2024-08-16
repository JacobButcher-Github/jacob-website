import Head from "next/head";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NavBar";
import LinkBar from "../components/LinkBar";
import QuickAbout from "../components/QuickAbout"

export default function index() {
  return (
    <>
      <Head>
        <title>Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
        <MainBanner />
        <LinkBar />
        <QuickAbout />
      </div>
    </>
  );
}
