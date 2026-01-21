import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // flipping name logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIsHindi((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    {
      name: "About",
      sections: [
        {
          title: "The College",
          items: [
            "About GTB4CEC",
            "Vision & Mission",
            "Director's Message",
            "Management",
            "Governing Body",
          ],
        },
      ],
    },
    {
      name: "Admission",
      sections: [
        {
          title: "Process",
          items: [
            "Admission Criteria",
            "Fee Structure",
            "Seat Matrix",
            "Required Documents",
          ],
        },
      ],
    },
    {
      name: "Academics",
      sections: [
        {
          title: "Departments",
          items: [
            "Computer Science (CSE)",
            "Information Technology (IT)",
            "Electronics (ECE)",
            "Mechanical (MAE)",
          ],
        },
        {
          title: "Resources",
          items: ["Academic Calendar", "Syllabus", "Library"],
        },
      ],
    },
    { name: "Faculty", href: "#faculty" },
    {
      name: "Training & Placement Cell",
      sections: [
        {
          title: "Placement Info",
          items: ["Placement Record", "Our Recruiters", "Internship Policy"],
        },
      ],
    },
    {
      name: "Campus / Facilities",
      sections: [
        {
          title: "Services",
          items: ["Infrastructure", "Labs", "Auditorium", "Hostel"],
        },
      ],
    },
    { name: "Mandatory Disclosure", href: "#" },
    { name: "Contact", href: "#connect" },
  ];

  return (
    <>
      <header className="w-full z-[100] relative bg-white border-b border-gray-100 shadow-sm">
        {/* Tier 1: Red Mini Utility Bar */}
        <div className="bg-primary text-white py-1 px-6 hidden lg:block">
          <div className="container mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                Jobs
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Tenders
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Payment Gateway
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Student Login
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="cursor-pointer">हिन्दी / A- A A+</span>
              <span className="border-l border-white/20 pl-4">
                GTB4CEC Email
              </span>
            </div>
          </div>
        </div>

        {/* Tier 2: Branding Bar - Fixed Overlap */}
        <div className="py-4 px-4 md:px-8 lg:px-12 container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 bg-white border border-gray-100 flex items-center justify-center shadow-sm p-1 rounded-full overflow-hidden">
              <div className="w-full h-full border-primary border-4  rounded-full flex items-center justify-center font-black text-white text-[8px] md:text-[11px] text-center leading-none">
                <img src="/logo (2).png" alt="" />
              </div>
            </div>

            {/* Height set to accommodate wrapped name without overlap */}
            <div className="relative h-16 md:h-20 flex flex-col justify-center min-w-[200px] md:min-w-[400px]">
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 transform ${isHindi ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
              >
                <h1 className="text-base md:text-2xl font-bold tracking-tight text-[#222] leading-tight">
                  Guru Tegh Bahadur 4th Centenary Engineering College
                </h1>
              </div>
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 transform ${isHindi ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <h1 className="text-base md:text-2xl font-bold tracking-tight text-[#222] leading-tight font-serif">
                  गुरु तेघ बहादुर चतुर्थ शताब्दी इंजीनियरिंग कॉलेज
                </h1>
              </div>

              {/* Added padding top and relative positioning to prevent overlap */}
              <div className="mt-auto pt-4 md:pt-6 flex items-center gap-2">
                <span className="text-[9px] md:text-[11px] font-black text-primary italic uppercase tracking-wider">
                  An Institution of Excellence
                </span>
                <span className="text-secondary text-sm">★</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right">
            <div className="flex items-center gap-2 text-primary">
              <span className="text-[11px] font-bold uppercase tracking-widest">
                Rajouri Garden, New Delhi
              </span>
              <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">
              Affiliated to GGSIPU • Approved by AICTE
            </p>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Tier 3: Navigation Strip */}
        <nav
          className={`bg-primary text-white border-t border-white/10 lg:block ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex items-center h-full w-full lg:w-auto overflow-x-auto no-scrollbar lg:flex-grow">
              <a
                href="#home"
                className="hidden lg:flex h-11 px-6 items-center hover:bg-white/10 transition-colors border-r border-white/5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>

              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="h-full group whitespace-nowrap"
                  onMouseEnter={() =>
                    setActiveMenu(item.sections ? item.name : null)
                  }
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`h-11 w-full lg:w-auto px-4 text-[11px] font-bold uppercase tracking-tight flex items-center justify-between lg:justify-start gap-1.5 transition-all hover:bg-white/10 ${activeMenu === item.name ? "bg-secondary text-primary" : ""}`}
                  >
                    {item.name}
                    {item.sections && (
                      <svg
                        className={`w-2.5 h-2.5 transition-transform ${activeMenu === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {item.sections && activeMenu === item.name && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-secondary animate-reveal py-8 px-8 z-[120] hidden lg:block">
                      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                        {item.sections.map((sec, idx) => (
                          <div key={idx} className="space-y-4">
                            <h4 className="text-primary text-[10px] font-black uppercase tracking-widest border-b border-gray-100 pb-2">
                              {sec.title}
                            </h4>
                            <ul className="space-y-1">
                              {sec.items.map((sub, sidx) => (
                                <li key={sidx}>
                                  <a
                                    href="#"
                                    className="block py-1 text-[12px] text-gray-600 hover:text-primary transition-all font-medium"
                                  >
                                    {sub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="h-11 w-full lg:w-auto px-6 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all border-l border-white/5 bg-white/5 lg:bg-transparent"
            >
              <span className="lg:hidden mr-2 text-[11px] font-bold uppercase">
                Search
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* SEARCH OVERLAY - Diagonal Expansion (Top-Right to Left-Bottom) */}
      <div
        className={`fixed inset-0 z-[200] bg-primary/95 flex flex-col items-center justify-center p-6 search-mask ${isSearchOpen ? "open" : ""}`}
      >
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-10 right-10 text-white hover:text-secondary transition-colors"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full max-w-4xl space-y-10 text-center animate-reveal">
          <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tighter uppercase">
            Search GTB4CEC
          </h3>
          <div className="relative group">
            <input
              autoFocus={isSearchOpen}
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent border-b-2 border-secondary/30 px-4 py-6 text-2xl md:text-6xl text-white placeholder:text-white/10 focus:outline-none focus:border-secondary transition-all text-center font-medium"
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-secondary w-0 group-focus-within:w-full transition-all duration-500"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest pt-8">
            <span>Trending:</span>
            <a
              href="#"
              className="text-secondary hover:text-white underline underline-offset-4"
            >
              Admission 2024 Portal
            </a>
            <span>•</span>
            <a
              href="#"
              className="text-secondary hover:text-white underline underline-offset-4"
            >
              Exam Schedule
            </a>
            <span>•</span>
            <a
              href="#"
              className="text-secondary hover:text-white underline underline-offset-4"
            >
              Placement Cell
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
