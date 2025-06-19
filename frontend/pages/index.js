import Hero from "../components/Hero";
import TrendingInsights from "../components/TrendingInsights";

export default function Home({ featuredInsight, trendingInsights }) {
  // Debug: log trendingInsights to check data structure
  console.log('TrendingInsights:', trendingInsights);
  return (
    <>
      {/* CMS-powered Hero: displays featured Insight */}
      {/* HERO qui prend la hauteur du viewport sur petit écran */}
      <section className="relative flex flex-col justify-center min-h-[calc(100vh-var(--nav-height))] pt-[var(--nav-height)] bg-hero-mky overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[var(--nav-height)] bg-white" />
        <Hero insight={featuredInsight} />

        {/* Bandeau Trending - coller juste en bas */}
        <div className="w-full absolute left-0 bottom-0 z-10">
          <TrendingInsights insights={trendingInsights} />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Strategy & Operations</h3>
              <p className="text-gray-700">Optimize your operations and develop strategies for long-term success.</p>
            </div>
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-700">Leverage technology to create new growth opportunities.</p>
            </div>
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Organizational Change</h3>
              <p className="text-gray-700">Drive change management and build high-performing teams.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://source.unsplash.com/400x300/?business" alt="Case Study 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Retail Transformation</h3>
                <p className="text-gray-700 mb-4">Reinvented customer experience for a global retailer.</p>
                <a href="/case-studies/retail-transformation" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://source.unsplash.com/400x300/?healthcare" alt="Case Study 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare Efficiency</h3>
                <p className="text-gray-700 mb-4">Improved operational efficiency in healthcare systems.</p>
                <a href="/case-studies/healthcare-efficiency" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://source.unsplash.com/400x300/?banking" alt="Case Study 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Banking</h3>
                <p className="text-gray-700 mb-4">Transformed digital banking platforms for leading banks.</p>
                <a href="/case-studies/digital-banking" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Fetch the featured Insight from Strapi CMS
 */
export async function getStaticProps() {
  const apiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337';
  // Query Strapi for the insight marked as featured, including its heroImage
  const res = await fetch(
    `${apiUrl}/api/insights?filters[isFeatured][$eq]=true&populate=heroImage`
  );
  const json = await res.json();
  const featuredInsight = Array.isArray(json.data) && json.data.length > 0
    ? json.data[0]
    : null;
  // Fetch trending insights: isTrending=true, sorted by rank, limit 4, include image
  const resTrending = await fetch(
    `${apiUrl}/api/insights?filters[isTrending][$eq]=true&sort=trendingRank:asc&pagination[limit]=4&populate=heroImage`
  );
  const jsonTrending = await resTrending.json();
  const trendingInsights = Array.isArray(jsonTrending.data)
    ? jsonTrending.data
    : [];
  return {
    props: { featuredInsight, trendingInsights },
    // Revalidate every minute
    revalidate: 60,
  };
}