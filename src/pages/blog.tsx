import Head from "next/head";
import NavBar from '../components/NavBar'
import { getSortedPostsData, PostData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <>
      <Head>
        <title>Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />

        <div className="flex flex-col items-center text-mainText">
          <h2 className="">Blog</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title }) => (
              <li className="" key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
}

