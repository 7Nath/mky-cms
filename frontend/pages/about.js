import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Firm</h1>
        <p className="text-gray-700 mb-4">Founded in 20XX, our firm has been delivering strategic solutions to clients worldwide.</p>
        <p className="text-gray-700">Our mission is to drive sustainable growth and innovation across industries.</p>
      </section>
    </>
  );
}