export default function Hero({ insight }) {
  if (!insight || !insight.attributes) return null;
  const { attributes } = insight;
  const {
    title,
    summary,
    ctaText,
    ctaUrl,
    heroImage,
    heroPosition,
  } = attributes;

  const imageUrl = heroImage?.data?.attributes?.url || "";
  const isImageLeft = heroPosition === "image-left";

  return (
    <div className="relative pt-54">
      {/* Gradient overlay at the top to blend with navbar */}
      <div
        className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, white 80%, transparent 100%)",
        }}
      />
      <div
        className={
          "container mx-auto flex flex-col-reverse " +
          (isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row") +
          " items-center flex-1 w-full"
        }
      >
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white text-lg mb-6">{summary}</p>
          {ctaText && ctaUrl && (
            <a
              href={ctaUrl}
              className="inline-block bg-white text-blue-700 py-3 px-6 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              {ctaText}
            </a>
          )}
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full max-w-md h-auto rounded-lg shadow-lg object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
