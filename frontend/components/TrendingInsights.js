/**
 * TrendingInsights
 * Displays up to 4 trending insights in a compact horizontal banner.
 * @param {Array} insights - Array of Strapi entries { id, attributes }
 */
export default function TrendingInsights({ insights }) {
  if (!insights || insights.length === 0) return null;
  return (
    <section className="w-full" style={{ backgroundColor: "#F0F0F0" }}>
  <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1582px' }}>
    <div
      className="grid items-center"
      style={{
        gridTemplateColumns: "auto repeat(4, 1fr)",
        minWidth: 0
      }}
    >
      <div className="font-bold text-black mr-12 leading-tight uppercase flex flex-col items-start justify-center py-3 col-span-1">
        <span className="block text-base">TRENDING</span>
        <span className="block text-sm">INSIGHTS</span>
      </div>
      {insights.slice(0, 4).map((item, idx) => {
        if (!item || !item.attributes) return null;
        const { id, attributes } = item;
        const title = attributes.title || "Untitled";
        return (
          <div
            key={id}
            className="flex items-center border-r border-gray-200 last:border-none snap-start px-4 py-2"
            style={{ minWidth: 0 }}
          >
            <span className="text-blue-600 font-bold text-2xl mr-4 flex-shrink-0">
              {idx + 1}
            </span>
            <span className="text-black text-sm font-medium truncate max-w-xs">
              {title}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}