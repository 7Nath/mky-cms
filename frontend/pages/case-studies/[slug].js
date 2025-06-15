import Head from "next/head";
import { caseStudies } from "../../../data/caseStudies";

export default function CaseStudy({ caseStudy }) {
  if (!caseStudy) return <p>Case study not found</p>;
  return (
    <>
      <Head>
        <title>{caseStudy.title} | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{caseStudy.title}</h1>
        <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = caseStudies.map((c) => ({ params: { slug: c.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const caseStudy = caseStudies.find((c) => c.slug === params.slug);
  return { props: { caseStudy } };
}