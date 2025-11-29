"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function HeaderNav() {
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    if (mobileMenuRef.current) {
      mobileMenuRef.current.removeAttribute("open");
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={`relative text-sm font-medium uppercase tracking-wide transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8B0000] after:to-[#FF6A00] after:transition-all after:duration-300 after:content-[''] md:hover:text-[#FF6A00] md:hover:after:w-full ${
              activeSection === item.href.slice(1)
                ? "text-[#FF6A00] after:scale-x-100 after:w-full"
                : "text-white/70"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <details ref={mobileMenuRef} className="relative md:hidden">
        <summary className="list-none cursor-pointer">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-white/10 bg-[#060606] p-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-[#FF6A00]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </details>
    </>
  );
}

