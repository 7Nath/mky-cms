import Head from "next/head";

export default function Careers({ jobs }) {
  return (
    <>
      <Head>
        <title>Careers | Consulting Firm</title>
      </Head>
      <section className="py-16 container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <p className="text-gray-700">{job.location}</p>
              <p className="text-blue-600 font-semibold mt-2">{job.type}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const jobs = [
    { id: 1, title: "Consultant", location: "New York, NY", type: "Full-time" },
    { id: 2, title: "Analyst", location: "London, UK", type: "Full-time" },
    { id: 3, title: "Senior Partner", location: "San Francisco, CA", type: "Full-time" },
  ];
  return { props: { jobs } };
}