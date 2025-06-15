import Link from 'next/link';

/**
 * TrendingInsights
 * Displays up to 4 trending insights in a full-width strip below the Hero.
 * @param {Array} insights - Array of Strapi entries { id, attributes }
 */
export default function TrendingInsights({ insights }) {
  console.log('TRENDING INSIGHTS:', insights);
  if (!insights || insights.length === 0) return null;
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Trending Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((item, idx) => {
            if (!item || !item.attributes) {
              console.log("⚠️ Insight mal formaté :", item);
              return null;
            }
            const { id, attributes } = item;
            const { title, summary, ctaText } = attributes;
            const href = `/insights/${id}`;
            return (
              <div key={id} className="flex flex-col items-start">
                <span className="text-5xl font-bold text-gray-900">{idx + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-700 flex-grow">{summary}</p>
                {ctaText && (
                  <Link href={href} className="mt-4 inline-block text-sm font-semibold text-black hover:text-gray-600">
                    {ctaText}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
