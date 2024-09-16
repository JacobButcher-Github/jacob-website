import Head from 'next/head';
import NavBar from '@/components/NavBar';
import ProjectList from '../components/ProjectList'

export default function projects() {
  return (
    <>
      <Head>
        <title>Jacob Butcher - Projects</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center text-mainText font-motiva-sans">

          <h1 className="text-5xl mt-10">Projects</h1>
          <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-3" />

          <div className='w-4/5'>
            <ProjectList />
          </div>
        </div>
      </div>
    </>
  );
}

