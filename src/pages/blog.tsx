import Head from "next/head";
import NavBar from "../components/NavBar";
import { getSortedPostsData, PostData } from "../../lib/posts";

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
        <title>About - Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />

        <div className="flex flex-col items-center text-mainText">
          <h1 className="text-7xl mt-16">Blog</h1>
          <div className="w-1/3 h-[2px] bg-gradient-to-r from-transparent via-mainText to-transparent mb-8"></div>
          <ul className="text-2xl">
            {allPostsData.map(({ id, date, title }) => (
              <li className="" key={id}>
                {title}
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
