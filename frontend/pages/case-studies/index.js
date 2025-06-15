import Head from "next/head";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`}
               className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
                <img src={c.image} alt={c.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-700">{c.excerpt}</p>
                </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}