import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Default menu items for the mega menu; customize as needed.
export const defaultMenuItems = [
  {
    title: "Industries",
    columns: [
      {
        links: [
          { title: "Aerospace & Defense", href: "/industries/aerospace-defense" },
          { title: "Agriculture", href: "/industries/agriculture" },
          { title: "Chemicals", href: "/industries/chemicals" },
          { title: "Consumer Packaged Goods", href: "/industries/consumer-packaged-goods" },
          { title: "Education", href: "/industries/education" },
          { title: "Electric Power & Natural Gas", href: "/industries/electric-power-natural-gas" },
          { title: "Energy and Materials", href: "/industries/energy-and-materials" },
          { title: "Healthcare", href: "/industries/healthcare" },
          { title: "Engineering, Construction & Building Materials", href: "/industries/engineering-construction-building-materials" },
        ],
      },
      {
        links: [
          { title: "Financial Services", href: "/industries/financial-services" },
          { title: "Healthcare", href: "/industries/healthcare" },
          { title: "Industrials & Electronics", href: "/industries/industrials-electronics" },
          { title: "Infrastructure", href: "/industries/infrastructure" },
          { title: "Life Sciences", href: "/industries/life-sciences" },
          { title: "Logistics", href: "/industries/logistics" },
          { title: "Metals & Mining", href: "/industries/metals-mining" },
          { title: "Oil & Gas", href: "/industries/oil-gas" },
          { title: "Packaging & Paper", href: "/industries/packaging-paper" },
        ],
      },
      {
        links: [
          { title: "Private Capital", href: "/private-capital" },
          { title: "Public Sector", href: "/public-sector" },
          { title: "Real Estate", href: "/industries/real-estate" },
          { title: "Retail", href: "/industries/retail" },
          { title: "Semiconductors", href: "/industries/semiconductors" },
          { title: "Social Sector", href: "/industries/social-sector" },
          { title: "Consumer", href: "/industries/consumer" },
          { title: "Technology, Media & Telecommunications", href: "/industries/technology-media-telecommunications" },
          { title: "Travel", href: "/industries/travel" },
        ],
      },
    ],
  },
  {
    title: "Capabilities",
    columns: [
      {
        links: [
          { title: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
          { title: "Business Building", href: "/capabilities/business-building" },
          { title: "Geopolitics", href: "/capabilities/geopolitics" },
          { title: "Growth, Marketing & Sales", href: "/capabilities/growth-marketing-sales" },
          { title: "Implementation", href: "/capabilities/implementation" },
          { title: "M&A", href: "/capabilities/mergers-acquisitions" },
          { title: "Operations", href: "/capabilities/operations" },
        ],
      },
      {
        links: [
          { title: "Risk & Resilience", href: "/capabilities/risk-resilience" },
          { title: "Strategy & Corporate Finance", href: "/capabilities/strategy-corporate-finance" },
          { title: "People & Organization Performance", href: "/capabilities/people-organization-performance" },
          { title: "Sustainability", href: "/capabilities/sustainability" },
          { title: "Technology", href: "/capabilities/technology" },
          { title: "Transformation", href: "/capabilities/transformation" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "All Capabilities", href: "/capabilities" },
        ],
      },
    ],
  },
  {
    title: "Featured Insights",
    columns: [
      {
        title: "TRENDING TOPICS",
        links: [
          { title: "Artificial Intelligence & Gen AI", href: "/insights/artificial-intelligence" },
          { title: "Business Resilience", href: "/insights/business-resilience" },
          { title: "Case Studies", href: "/insights/case-studies" },
          { title: "Tariffs and Global Trade", href: "/insights/global-trade" },
          { title: "The Rise of Quantum Computing", href: "/insights/quantum-computing" },
        ],
        secondaryTitle: "FEATURED SERIES",
        secondaryLinks: [
          { title: "Global Surveys", href: "/insights/global-surveys" },
          { title: "MKY Explainers", href: "/insights/explainers" },
          { title: "MKY on Books", href: "/insights/books" },
        ],
      },
      {
        title: "INTERVIEWS",
        links: [
          { title: "Author Talks", href: "/insights/author-talks" },
          { title: "MKY Live", href: "/insights/live" },
          { title: "MKY Podcast", href: "/insights/podcast" },
          { title: "MKY Video", href: "/insights/video" },
        ],
      },
      {
        title: "FEATURED",
        featured: true,
        links: [
          { 
            title: "MKY Quarterly", 
            description: "Our flagship business publication has been defining and informing the senior-management agenda since 1964.",
            href: "/insights/quarterly" 
          },
          { 
            title: "MKY Global Institute", 
            description: "Our mission is to help leaders in multiple sectors develop a deeper understanding of the global economy.",
            href: "/insights/mgi" 
          },
          { 
            title: "Ask MKY", 
            description: "Get answers to the questions that matter to you—based on MKY insights. This pilot of our new gen AI chatbot covers digital, AI, technology, media, and telecoms. Other topics coming soon.",
            href: "/insights/ask-mckinsey" 
          },
        ],
      },
    ],
  },
  {
    title: "About Us",
    columns: [
      {
        title: "Company",
        links: [
          { title: "Our Story", href: "/about/story" },
          { title: "Leadership", href: "/about/leadership" },
          { title: "Values & Culture", href: "/about/culture" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
];

export default function Navbar({
  logoSrc = "/logo.svg",
  logoAlt = "Company Logo",
  menuItems = defaultMenuItems,
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navRef]);

  const handleKeyDown = (e, title) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenMenu(openMenu === title ? null : title);
    }
    if (e.key === "Escape") {
      setOpenMenu(null);
    }
  };

  const toggleMobileSubmenu = (idx) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === idx ? null : idx);
  };

  const handleMouseEnter = (menuTitle) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenMenu(menuTitle);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing the menu
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150); // 150ms delay
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-filter shadow-none"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between h-24 px-8 w-[98vw] max-w-[1800px] mx-auto relative">
         {/* Left Hamburger and Logo */}
        <div className="flex items-center space-x-7">
          <button
            className="text-gray-800 hover:text-blue-600 focus:outline-none mr-[12px] ml-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              className="h-8 w-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-shrink-0">
            <Link href="/">
                <img src={logoSrc} alt={logoAlt} className="h-10 w-auto" />
            </Link>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul role="menubar" className="flex space-x-4 lg:space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.title}
                role="none"
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.title}
                  onClick={() => setOpenMenu(openMenu === item.title ? null : item.title)}
                  onKeyDown={(e) => handleKeyDown(e, item.title)}
                  className="text-black hover:text-violet-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {item.title}
                </button>
                {/* Mega Menu */}
                {openMenu === item.title && (
                  <div
                    role="menu"
                    aria-label={item.title}
                    className={`absolute top-full mt-2 bg-white shadow-lg p-6 grid gap-6 ${
                      item.title === "Featured Insights" ? 'w-screen max-w-5xl grid-cols-3' :
                      item.columns.length === 1 ? 'w-64' : 
                      item.columns.length === 2 ? 'w-96 grid-cols-2' : 
                      'w-screen max-w-4xl grid-cols-3'
                    }`}
                    style={{
                      right: item.title === 'About Us' || item.title === 'Careers' ? '0' : 'auto',
                      left: item.title === 'About Us' || item.title === 'Careers' ? 'auto' : 
                            item.title === 'Featured Insights' ? '50%' : '0',
                      transform: item.title === 'About Us' || item.title === 'Careers' ? 'translateX(0)' : 
                                item.title === 'Featured Insights' ? 'translateX(-50%)' : 'none'
                    }}
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.columns.map((col, colIndex) => (
                      <div key={col.title || colIndex} className={col.featured ? 'bg-gray-50 p-4 rounded-lg' : ''}>
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">{col.title}</h3>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.title} role="none">
                              <Link href={link.href}
                                  role="menuitem"
                                  className={`block transition-all duration-200 ${col.featured ? 'mb-4 hover:text-violet-600 hover:underline' : 'hover:text-violet-600 hover:underline'}`}
                                >
                                  <div className={col.featured ? 'font-semibold text-gray-900 mb-1' : 'text-black text-sm'}>
                                    {link.title}
                                  </div>
                                  {link.description && (
                                    <div className="text-xs text-gray-600 leading-relaxed">
                                      {link.description}
                                    </div>
                                  )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {col.secondaryTitle && (
                          <>
                            <h3 className="text-sm font-bold text-gray-900 mb-4 mt-8 uppercase tracking-wide">{col.secondaryTitle}</h3>
                            <ul className="space-y-3">
                              {col.secondaryLinks?.map((link) => (
                                <li key={link.title} role="none">
                                  <Link href={link.href}
                                      role="menuitem"
                                      className="text-black hover:text-violet-600 hover:underline text-sm block transition-all duration-200"
                                    >
                                      {link.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Actions */}
        <div className="flex items-center">
          {/* Desktop Search */}
          <button className="hidden lg:inline-flex items-center text-gray-800 hover:text-blue-600 focus:outline-none">
            <span className="sr-only">Search</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed inset-0 z-50 transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-25"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-white shadow-xl p-6 overflow-auto">
          <button
            className="text-gray-800 hover:text-blue-600 focus:outline-none mb-6"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav role="menu" aria-label="Mobile menu" className="space-y-4">
            {menuItems.map((item, idx) => (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu(idx)}
                  className="flex w-full justify-between items-center text-gray-800 font-medium focus:outline-none"
                  aria-expanded={mobileSubmenuOpen === idx}
                >
                  {item.title}
                  <svg
                    className={`h-5 w-5 transform ${
                      mobileSubmenuOpen === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileSubmenuOpen === idx && (
                  <div className="mt-2 pl-4">
                    {item.columns.map((col) => (
                      <div key={col.title} className="mb-4">
                        <p className="text-gray-600 font-semibold">{col.title}</p>
                        <ul className="mt-2 space-y-2">
                          {col.links.map((link) => (
                            <li key={link.title}>
                              <Link href={link.href} className="block text-black hover:text-blue-600">
                                  {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="flex items-center text-black hover:text-blue-600 py-2 focus:outline-none">
                <span className="sr-only">Search</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="ml-2">Search</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}