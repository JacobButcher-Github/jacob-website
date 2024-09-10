import Head from 'next/head';
import NavBar from '@/components/NavBar';
import ProjectList from '../components/ProjectList'

export default function index() {
  return (
    <>
      <Head>
        <title>Jacob Butcher - Projects</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
        <ProjectList />
      </div>
    </>
  );
}

