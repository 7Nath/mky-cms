import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Default menu items for the mega menu; customize as needed.
export const defaultMenuItems = [
  {
    title: "Industries",
    columns: [
      {
        title: "By Sector",
        links: [
          { title: "Consumer", href: "/industries/consumer" },
          { title: "Energy & Materials", href: "/industries/energy-materials" },
          { title: "Financial Services", href: "/industries/financial-services" },
          { title: "Healthcare", href: "/industries/healthcare" },
        ],
      },
      {
        title: "By Topic",
        links: [
          { title: "Digital", href: "/industries/digital" },
          { title: "Operations", href: "/industries/operations" },
          { title: "Risk", href: "/industries/risk" },
          { title: "Sustainability", href: "/industries/sustainability" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "All Industries", href: "/industries" },
          { title: "Case Studies", href: "/case-studies" },
        ],
      },
    ],
  },
  {
    title: "Capabilities",
    columns: [
      {
        title: "Consulting",
        links: [
          { title: "Strategy & Corporate Finance", href: "/capabilities/strategy-finance" },
          { title: "Marketing & Sales", href: "/capabilities/marketing-sales" },
          { title: "Digital Transformation", href: "/capabilities/digital-transformation" },
        ],
      },
      {
        title: "Implementation",
        links: [
          { title: "Operations Improvement", href: "/capabilities/operations-improvement" },
          { title: "Organization & Leadership", href: "/capabilities/organization-leadership" },
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
        title: "Insights",
        links: [
          { title: "Articles", href: "/insights/articles" },
          { title: "Reports", href: "/insights/reports" },
          { title: "Podcasts", href: "/insights/podcasts" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "All Insights", href: "/insights" },
        ],
      },
    ],
  },
  {
    title: "Locations",
    columns: [
      {
        title: "Our Offices",
        links: [
          { title: "Americas", href: "/locations/americas" },
          { title: "Europe", href: "/locations/europe" },
          { title: "Asia", href: "/locations/asia" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "All Locations", href: "/locations" },
        ],
      },
    ],
  },
  {
    title: "Careers",
    columns: [
      {
        title: "Opportunities",
        links: [
          { title: "Students & Graduates", href: "/careers/students-graduates" },
          { title: "Professional Roles", href: "/careers/professional-roles" },
          { title: "Experienced Hires", href: "/careers/experienced-hires" },
        ],
      },
      {
        title: "Explore",
        links: [
          { title: "All Careers", href: "/careers" },
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
        <div className="hidden md:flex md:space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul role="menubar" className="flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.title}
                role="none"
                className="relative"
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
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
                    className="absolute left-0 top-full mt-2 w-screen max-w-lg bg-white shadow-lg p-6 grid grid-cols-3 gap-6"
                  >
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <h3 className="text-sm font-semibold text-gray-900">{col.title}</h3>
                        <ul className="mt-4 space-y-2">
                          {col.links.map((link) => (
                            <li key={link.title} role="none">
                              <Link href={link.href}
                                  role="menuitem"
                                  className="text-black hover:text-blue-600 text-sm"
                                >
                                  {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/signin" className="text-gray-800 hover:text-blue-600 text-sm">Sign In</Link>
            <span className="text-gray-400">|</span>
            <Link href="/subscribe" className="text-gray-800 hover:text-blue-600 text-sm">Subscribe</Link>
          </div>
          {/* Desktop Search */}
          <button className="hidden md:inline-flex items-center text-gray-800 hover:text-blue-600 focus:outline-none ml-4">
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
              <Link href="/signin" className="block text-black hover:text-blue-600 py-2">Sign In
              </Link>
              <Link href="/subscribe" className="block text-black hover:text-blue-600 py-2">Subscribe
              </Link>
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