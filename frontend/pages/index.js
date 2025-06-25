import Hero from "../components/Hero";
import TrendingInsights from "../components/TrendingInsights";
import Partners from "../components/Partners";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home({ featuredInsight, trendingInsights }) {
  // Debug: log trendingInsights to check data structure
  console.log('TrendingInsights:', trendingInsights);
  console.log('featuredInsight in Home component:', featuredInsight);
  
  return (
    <>
      {/* CMS-powered Hero: displays featured Insight */}
      {/* HERO qui prend la hauteur du viewport sur petit écran */}
      <section className="relative flex flex-col justify-center min-h-[calc(100vh-var(--nav-height))] bg-hero-mky overflow-hidden">
        {/* <div className="absolute inset-x-0 top-7 h-[var(--nav-height)] bg-white" /> */}
        {featuredInsight ? (
          <Hero insight={featuredInsight} />
        ) : (
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Consulting Firm</h1>
            <p className="text-lg text-gray-700">No featured insight available at the moment.</p>
          </div>
        )}

        {/* Bandeau Trending - coller juste en bas */}
        <div className="w-full absolute left-0 bottom-0 z-10">
          <TrendingInsights insights={trendingInsights} />
        </div>
      </section>
      <Partners />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337';
  
  try {
    // Query Strapi for the insight marked as featured, including its heroImage
    const res = await fetch(
      `${apiUrl}/api/insights?filters[isFeatured][$eq]=true&populate=heroImage`
    );
    const json = await res.json();
    
    // Transform the Strapi data structure to match our component expectations
    let featuredInsight = null;
    if (Array.isArray(json.data) && json.data.length > 0) {
      const rawInsight = json.data[0];
      featuredInsight = {
        id: rawInsight.id,
        documentId: rawInsight.documentId,
        attributes: {
          ...rawInsight,
          // Ensure heroImage is properly structured
          heroImage: rawInsight.heroImage
        }
      };
    }
    
    // Fetch trending insights: isTrending=true, sorted by rank, limit 4, include image
    const resTrending = await fetch(
      `${apiUrl}/api/insights?filters[isTrending][$eq]=true&sort=trendingRank:asc&pagination[limit]=4&populate=heroImage`
    );
    const jsonTrending = await resTrending.json();
    
    // Transform trending insights data structure  
    const trendingInsights = Array.isArray(jsonTrending.data)
      ? jsonTrending.data.map(insight => ({
          id: insight.id,
          documentId: insight.documentId,
          attributes: {
            ...insight,
            heroImage: insight.heroImage
          }
        }))
      : [];
        console.log('Featured insight in getStaticProps:', featuredInsight);
    console.log('Trending insights in getStaticProps:', trendingInsights);
    
    // Fallback data for testing if no trending insights from Strapi
    const fallbackTrendingInsights = trendingInsights.length === 0 ? [
      { id: 1, attributes: { title: "The Future of Work: Remote Collaboration" } },
      { id: 2, attributes: { title: "Sustainable Business Strategies for 2024" } },
      { id: 3, attributes: { title: "AI and Machine Learning in Healthcare" } },
      { id: 4, attributes: { title: "Digital Transformation Success Stories" } }
    ] : trendingInsights;
    
    return {
      props: { featuredInsight, trendingInsights: fallbackTrendingInsights },
      // Revalidate every minute
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { featuredInsight: null, trendingInsights: [] },
      revalidate: 60,
    };
  }
}