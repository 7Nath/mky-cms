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
    <div
      className={
        "container mx-auto flex flex-col-reverse " +
        (isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row") +
        " items-center flex-1 w-full"
      }
      // PAS de min-h-screen ici!
      // PAS de py-20 ici, mais tu peux garder un peu de padding horizontal si tu veux
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
  );
}
