import Head from "next/head";
import { insights } from "../../../data/insights";

export default function Insight({ post }) {
  if (!post) return <p>Article not found</p>;
  return (
    <>
      <Head>
        <title>{post.title} | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = insights.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = insights.find((p) => p.slug === params.slug);
  return { props: { post } };
}