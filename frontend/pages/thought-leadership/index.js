import Head from "next/head";
import Link from "next/link";
import { insights } from "../../data/insights";

export default function ThoughtLeadership() {
  return (
    <>
      <Head>
        <title>Thought Leadership | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Thought Leadership</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post) => (
            <Link key={post.slug} href={`/thought-leadership/${post.slug}`}
               className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}