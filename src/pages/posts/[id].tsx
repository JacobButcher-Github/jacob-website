import Head from 'next/head'
import NavBar from '../../components/NavBar'
import { getAllPostIds, getPostData, Params, PostData } from '../../../lib/posts';

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
      <div className="bg-gradient-to-b from-bgMain to-bgSecondary font-motiva-sans min-h-screen">
        <NavBar />
        <p>{postData.title}</p>
        <br />
        <p>{postData.date}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </>
  );
}
