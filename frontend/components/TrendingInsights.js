/**
 * TrendingInsights
 * Displays up to 4 trending insights in a compact horizontal banner.
 * @param {Array} insights - Array of Strapi entries { id, attributes }
 */
export default function TrendingInsights({ insights }) {
  if (!insights || insights.length === 0) return null;
  return (
    <section className="w-full bg-white">
      <div className="flex items-center px-4 py-3">
        <div className="font-bold text-black mr-8 leading-tight uppercase">
          <span className="block text-base">TRENDING</span>
          <span className="block text-sm">INSIGHTS</span>
        </div>
        <div className="flex-1 flex items-center overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
          {insights.slice(0, 4).map((item, idx) => {
            if (!item) {
              return null;
            }
            const { id, title } = item;
            return (
              <div
                key={id}
                className="flex items-center pr-8 mr-8 border-r border-gray-200 last:border-none last:mr-0 snap-start"
              >
                <span className="text-blue-600 font-bold text-2xl mr-2">
                  {idx + 1}
                </span>
                <span className="truncate text-black">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}