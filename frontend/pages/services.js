import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Strategy & Operations</h2>
            <p className="text-gray-700">Detailed description of the service.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Digital Transformation</h2>
            <p className="text-gray-700">Detailed description of the service.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Organizational Change</h2>
            <p className="text-gray-700">Detailed description of the service.</p>
          </div>
        </div>
      </section>
    </>
  );
}