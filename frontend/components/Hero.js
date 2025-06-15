/**
 * Hero component to display a featured Insight from CMS
 * @param {object} props.insight - Strapi Insight entry with attributes
 */
export default function Hero({ insight }) {
  if (!insight || !insight.attributes) {
    // No featured insight set; render nothing or fallback
    console.log('No insight or attributes:', insight);
    return null;
  }
  const { attributes } = insight;
  const {
    title,
    summary,
    ctaText,
    ctaUrl,
    heroImage,
    heroPosition,
  } = attributes;
  // Derive image URL from Strapi response
  const imageUrl = heroImage?.data?.attributes?.url || "";
  const isImageLeft = heroPosition === "image-left";
  return (
    <section className="relative bg-gray-50">
      <div
        className={
          `container mx-auto px-6 py-20 flex flex-col-reverse ` +
          (isImageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row') +
          ' items-center'
        }
      >
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-700 mb-6">{summary}</p>
          {ctaText && ctaUrl && (
            <a
              href={ctaUrl}
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              {ctaText}
            </a>
          )}
        </div>
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
        </div>
      </div>
    </section>
  );
}