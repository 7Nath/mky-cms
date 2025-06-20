export default function Hero({ insight }) {
  console.log('Hero component received insight:', insight);
  
  if (!insight || !insight.attributes) {
    console.log('Hero returning null - no insight or attributes');
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

  // Convert Strapi blocks format to plain text
  const extractTextFromBlocks = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return '';
    return blocks.map(block => {
      if (block.children && Array.isArray(block.children)) {
        return block.children.map(child => child.text || '').join('');
      }
      return '';
    }).join(' ');
  };

  const summaryText = typeof summary === 'string' ? summary : extractTextFromBlocks(summary);
  
  // Build complete image URL with Strapi base URL
  const strapiUrl = 'http://localhost:1337';
  const imageUrl = heroImage?.url 
    ? `${strapiUrl}${heroImage.url}`
    : "";
  
  const isImageLeft = heroPosition === "image-left";  return (
    <div className="relative">
      {/* Hero container with max-width and centering */}
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1582px' }}>
        {/* Grid layout: 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 min-h-[70vh] items-center py-16 lg:py-24">
          
          {/* Left column: Text content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight text-black" 
                style={{ fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
              {title}
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg" 
               style={{ fontFamily: 'Georgia, serif', lineHeight: '1.6' }}>
              {summaryText}
            </p>
            
            {ctaText && ctaUrl && (
              <div className="pt-4">
                <a
                  href={ctaUrl}
                  className="inline-flex items-center text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors duration-200"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {ctaText}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
          
          {/* Right column: Image */}
          <div className="flex items-center justify-center order-first lg:order-last">
            {imageUrl && (
              <div className="w-full max-w-lg">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
