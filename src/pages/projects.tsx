import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function index() {
  return (
    <>
      <Head>
        <title>Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
      </div>
    </>
  );
}

