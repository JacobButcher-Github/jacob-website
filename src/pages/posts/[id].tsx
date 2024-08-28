import Head from 'next/head'
import NavBar from '../../components/NavBar'
import { getAllPostIds, getPostData, Params, PostData } from '../../../lib/posts';
import Date from '../../components/Date';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <>
      <Head>
        <title>{postData.id} - Jacob Butcher</title>
      </Head>
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen text-mainText">
        <NavBar />
        <div className="flex flex-col items-center ">
          <p className="text-4xl mt-5">{postData.title}</p>
          <br />
          <Date dateString={postData.date} />
          <br />
          <div className="mt-5 w-1/3 space-y-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </div>
    </>
  );
}
