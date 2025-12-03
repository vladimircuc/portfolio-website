"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vladimir-cuc/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/vladimircuc",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    url: "https://medium.com/@vladimircuc007",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-.28 6.42-2.6 6.42-2.33 0-2.61-2.88-2.61-6.42s.29-6.42 2.6-6.42S20.96 8.46 20.96 12zM24 12c0 3.17-.56 5.75-1.25 5.75S21.5 15.17 21.5 12s.56-5.75 1.25-5.75S24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:vladimircuc007@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const skillsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const certificationsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [aboutAnimated, setAboutAnimated] = useState(false);
  const [certificationsAnimated, setCertificationsAnimated] = useState(false);
  const [experienceAnimated, setExperienceAnimated] = useState(false);
  const [experienceItemsAnimated, setExperienceItemsAnimated] = useState([false, false, false]);
  const [projectsAnimated, setProjectsAnimated] = useState(false);
  const [blogAnimated, setBlogAnimated] = useState(false);
  const [contactAnimated, setContactAnimated] = useState(false);
  const [blogPosts, setBlogPosts] = useState([
    { title: "I Passed the OSCP on My First Attempt", subtitle: "", image: "", loading: true },
    { title: "FLU Proving Grounds Walkthrough", subtitle: "", image: "", loading: true },
    { title: "Mzeeav PG Walkthrough", subtitle: "", image: "", loading: true },
  ]);

  const [progressWidths, setProgressWidths] = useState({
    offensive: [0, 0, 0, 0, 0],
    tools: [0, 0, 0, 0, 0],
    programming: [0, 0, 0, 0, 0],
  });
  // Phishing mini-game state
  const [selectedPhishOption, setSelectedPhishOption] = useState(null);
  const [phishMessage, setPhishMessage] = useState("Phishing Check: Which one is safe to open?");
  const [hasPassedPhishTest, setHasPassedPhishTest] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Trigger hero animation on mount
    setHeroAnimated(true);
  }, []);

  // About section animation
  useEffect(() => {
    if (aboutAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !aboutAnimated) {
            setAboutAnimated(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, [aboutAnimated]);

  // Certifications section animation
  useEffect(() => {
    if (certificationsAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !certificationsAnimated) {
            setCertificationsAnimated(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }
    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, [certificationsAnimated]);

  // Experience section animation
  useEffect(() => {
    if (experienceAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !experienceAnimated) {
            setExperienceAnimated(true);
            // Animate items one at a time
            setExperienceItemsAnimated([true, false, false]);
            setTimeout(() => setExperienceItemsAnimated([true, true, false]), 200);
            setTimeout(() => setExperienceItemsAnimated([true, true, true]), 400);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, [experienceAnimated]);

  // Projects section animation
  useEffect(() => {
    if (projectsAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !projectsAnimated) {
            setProjectsAnimated(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [projectsAnimated]);

  // Blog section animation
  useEffect(() => {
    if (blogAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !blogAnimated) {
            setBlogAnimated(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (blogRef.current) {
      observer.observe(blogRef.current);
    }
    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, [blogAnimated]);

  // Fetch Medium post metadata from API route
  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('/api/medium-posts');
        const data = await response.json();
        
        if (Array.isArray(data) && data.length === 3) {
          const results = data.map((post, index) => ({
            title: post?.title || blogPosts[index].title,
            subtitle: post?.subtitle || "",
            image: post?.image || "",
            readingTime: post?.readingTime || "",
            loading: false,
          }));
          
          setBlogPosts(results);
        } else {
          console.error("Invalid data structure from API:", data);
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };

    fetchMediumPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Contact section animation
  useEffect(() => {
    if (contactAnimated) return;
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !contactAnimated) {
            setContactAnimated(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [contactAnimated]);

  useEffect(() => {
    if (hasAnimated) return;

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const targetWidths = {
              offensive: [88, 85, 82, 90, 86],
              tools: [87, 92, 89, 84, 83],
              programming: [91, 86, 88, 79, 82],
            };

            setTimeout(() => {
              setProgressWidths({
                offensive: targetWidths.offensive,
                tools: targetWidths.tools,
                programming: targetWidths.programming,
              });
            }, 100);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: isMobile ? "0px 0px 150px 0px" : "0px"
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="space-y-12 pb-0">
      <section
        id="home"
        className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#100505] via-[#050505] to-[#120000] px-6 py-10 shadow-[0_0_30px_rgba(139,0,0,0.25)] sm:px-10 sm:py-16"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Left Side - Content */}
          <div className={`space-y-6 transition-all duration-1000 ease-out ${
            heroAnimated 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 md:-translate-x-10 -translate-y-4"
          }`}>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#FF6A00]/80">
                Hello, I&apos;m
              </p>
              <h1 className="mt-2 bg-gradient-to-r from-white via-[#FF6A00] to-white bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl lg:text-6xl">
          Vladimir Cuc
        </h1>
              <p className="mt-3 text-xl font-semibold text-white/90">
                OSCP+ &amp; Security+ Certified
              </p>
              <p className="mt-2 text-lg text-white/70">
                Cybersecurity Enthusiast
              </p>
            </div>

            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              I&apos;m passionate about cybersecurity, especially offensive security. I focus on penetration testing, Active Directory attack paths, and automating red-team workflows to strengthen organizational defenses.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/Vladimir_Cuc_Resume.pdf"
                download
                className="group hidden items-center justify-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#FF6A00] shadow-[0_0_25px_rgba(255,106,0,0.25)] transition md:inline-flex md:hover:border-[#FF6A00] md:hover:bg-[#FF6A00]/20"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition md:hover:border-[#FF6A00]/40 md:hover:bg-[#FF6A00]/10 md:hover:text-[#FF6A00]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>

            {/* Blog Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#8B0000]/20 to-[#FF6A00]/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Latest Penetration Testing Insights</h3>
              <p className="mt-2 text-sm text-white/70">
                Explore my OSCP-style walkthroughs covering enumeration, exploitation,
                lateral movement, and privilege escalation with clear methodology.
              </p>
              <a
                href="#blog"
                onClick={(e) => handleSmoothScroll(e, "#blog")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A00] transition md:hover:text-[#FF6A00]/80"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Read Blog Posts
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition duration-300 hover:text-[#FF6A00] md:hover:translate-y-[-2px]"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className={`hidden justify-center lg:flex lg:justify-end transition-all duration-1000 ease-out delay-200 ${
            heroAnimated 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 lg:translate-x-10"
          }`}>
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#8B0000]/20 via-[#FF6A00]/15 to-[#8B0000]/20 blur-2xl animate-[subtle-glow_3s_ease-in-out_infinite]" />
              <img
                src="/photo.webp"
                alt="Vladimir Cuc"
                className="relative w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutSectionRef}
        className="scroll-mt-32 py-10 md:py-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-end">
          {/* Left Side - About Text */}
            <div className={`space-y-6 relative flex flex-col text-center md:text-left transition-all duration-1000 ease-out ${
            aboutAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
              </h2>
            </div>
            <div className="relative space-y-4 text-white/80 leading-relaxed">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#8B0000]/10 via-[#FF6A00]/5 to-[#8B0000]/10 blur-2xl -z-10" />
              
              <p>
                My path into cybersecurity started with a simple curiosity about how systems break — and how attackers think. Over time, that curiosity became a structured approach to understanding real adversarial behavior and reproducing it in controlled environments.
              </p>
              <p>
                Most of my work revolves around designing realistic attack scenarios, mapping internal attack paths, and learning how modern organizations actually fail — not theoretically, but in practice. I enjoy deconstructing security assumptions, analyzing infrastructure from an attacker&apos;s perspective, and building efficient tooling to automate parts of the offensive workflow.
              </p>
            </div>

            {/* Terminal Box */}
            <div className="mt-auto rounded-lg border border-white/10 bg-[#0a0a0a] p-4 font-mono text-sm shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/50 text-xs">terminal</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6A00]">$</span>
                  <span className="text-white/90">sudo apt install caffeine</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400/80">error: package already at latest version</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact & Education Card */}
          <div className={`rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-1000 ease-out delay-200 ${
            aboutAnimated 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          }`}>
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <svg className="h-5 w-5 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(863) 338-7723</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <svg className="h-5 w-5 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>vladimircuc007@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <svg className="h-5 w-5 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Lakeland, FL</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                <div className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-[#8B0000] to-[#FF6A00] rounded-full" />
                  <div className="flex-1 space-y-1 text-white/80">
                    <p className="font-semibold text-white">Bachelor of Science in Computer Science</p>
                    <p>Florida Southern College</p>
                    <p className="text-sm text-white/60">2022 - 2025 • GPA: 3.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div ref={certificationsRef} className="mt-16 space-y-6">
          <div className={`relative flex justify-center transition-all duration-800 ease-out ${
            certificationsAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-4"
          }`}>
            <h2 className="text-3xl font-bold text-white relative inline-block">
              Certifications
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://credentials.offsec.com/339b4695-2c39-4417-a60d-9bdc5f247be6#acc.TxXhAkWz"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-[#1a1a1a] border border-white/10 p-3 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#FF6A00]/40 hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] ${
                certificationsAnimated 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: certificationsAnimated ? "0ms" : "0ms" }}
            >
              <img
                src="/oscp.webp"
                alt="OSCP+ Certification"
                className="relative w-36 h-36 object-contain"
              />
            </a>

            <a
              href="https://www.credly.com/badges/32b497a4-3450-4764-9cb4-c9d83921b5f3/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-[#1a1a1a] border border-white/10 p-3 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#FF6A00]/40 hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] ${
                certificationsAnimated 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: certificationsAnimated ? "100ms" : "0ms" }}
            >
              <img
                src="/sec.webp"
                alt="Security+ Certification"
                className="relative w-36 h-36 object-contain"
              />
            </a>

            <a
              href="https://www.coursera.org/account/accomplishments/specialization/UREAVAK4CWK3"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-[#1a1a1a] border border-white/10 p-3 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#FF6A00]/40 hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] ${
                certificationsAnimated 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: certificationsAnimated ? "200ms" : "0ms" }}
            >
              <img
                src="/google.webp"
                alt="Google Cybersecurity Certificate"
                className="relative w-36 h-36 object-contain"
              />
            </a>

            <a
              href="https://learn.microsoft.com/en-us/users/vladimircuc/credentials/dd581d26192fe2d0?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-[#1a1a1a] border border-white/10 p-3 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#FF6A00]/40 hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] ${
                certificationsAnimated 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: certificationsAnimated ? "300ms" : "0ms" }}
            >
              <img
                src="/sc.webp"
                alt="Microsoft Security, Compliance, and Identity Fundamentals"
                className="relative w-36 h-36 object-contain"
              />
            </a>

            <a
              href="https://learn.microsoft.com/en-us/users/vladimircuc/credentials/ec30c1e3fdbc2225?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-[#1a1a1a] border border-white/10 p-3 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#FF6A00]/40 hover:shadow-[0_0_25px_rgba(255,106,0,0.3)] ${
                certificationsAnimated 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: certificationsAnimated ? "400ms" : "0ms" }}
            >
              <img
                src="/az.webp"
                alt="Microsoft Azure Fundamentals"
                className="relative w-36 h-36 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        ref={skillsSectionRef}
        className="scroll-mt-32 py-10 md:py-12"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          hasAnimated 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Skills & Technologies
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
          </h2>
          <p className="text-sm md:text-lg text-white/70 mt-4 md:mt-6">
            <span className="md:hidden">Core offensive security tools and techniques</span>
            <span className="hidden md:inline">A snapshot of the technologies and offensive techniques I use across real-world assessments and red-team workflows</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Offensive Techniques Card - Red Theme */}
          <div className={`rounded-2xl border border-[#8B0000]/30 bg-gradient-to-br from-[#8B0000]/10 via-[#1a0a0a] to-[#8B0000]/5 p-6 shadow-lg shadow-[#8B0000]/20 backdrop-blur-sm transition-all duration-1000 ease-out ${
            hasAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: hasAnimated ? "0ms" : "0ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-gradient-to-br from-[#8B0000]/40 to-[#8B0000]/20 p-3 border border-[#8B0000]/50">
                <svg className="w-6 h-6 text-[#FF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Offensive Techniques</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Active Directory Attack", level: 88, index: 0 },
                { name: "Web App Testing", level: 85, index: 1 },
                { name: "Pivoting/Tunneling", level: 82, index: 2 },
                { name: "Privilege Escalation (Linux/Windows)", level: 90, index: 3 },
                { name: "Lateral Movement", level: 86, index: 4 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-[#FF4444] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#8B0000]/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8B0000] to-[#FF4444] transition-all duration-[2000ms] ease-out"
                      style={{ width: `${progressWidths.offensive[skill.index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Card - Orange Theme */}
          <div className={`rounded-2xl border border-[#FF6A00]/30 bg-gradient-to-br from-[#FF6A00]/10 via-[#1a0a0a] to-[#FF6A00]/5 p-6 shadow-lg shadow-[#FF6A00]/20 backdrop-blur-sm transition-all duration-1000 ease-out ${
            hasAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: hasAnimated ? "200ms" : "0ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-gradient-to-br from-[#FF6A00]/40 to-[#FF6A00]/20 p-3 border border-[#FF6A00]/50">
                <svg className="w-6 h-6 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Tools</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "BloodHound", level: 87, index: 0 },
                { name: "Burp Suite", level: 92, index: 1 },
                { name: "Nmap/RustScan", level: 89, index: 2 },
                { name: "Chisel/Ligolo-NG", level: 84, index: 3 },
                { name: "Gobuster", level: 83, index: 4 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-[#FF6A00] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#FF6A00]/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFAA44] transition-all duration-[2000ms] ease-out"
                      style={{ width: `${progressWidths.tools[skill.index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming/Scripting Card - Toned Down Purple Theme */}
          <div className={`rounded-2xl border border-[#5B21B6]/25 bg-gradient-to-br from-[#5B21B6]/8 via-[#1a0a0a] to-[#4C1D95]/4 p-6 shadow-lg shadow-[#5B21B6]/15 backdrop-blur-sm transition-all duration-1000 ease-out ${
            hasAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: hasAnimated ? "400ms" : "0ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-gradient-to-br from-[#5B21B6]/30 to-[#4C1D95]/15 p-3 border border-[#5B21B6]/40">
                <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Programming/Scripting</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Python", level: 91, index: 0 },
                { name: "PowerShell", level: 86, index: 1 },
                { name: "Bash", level: 88, index: 2 },
                { name: "Java", level: 79, index: 3 },
                { name: "JavaScript", level: 82, index: 4 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-[#8B5CF6] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#5B21B6]/15">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#5B21B6] to-[#8B5CF6] transition-all duration-[2000ms] ease-out"
                      style={{ width: `${progressWidths.programming[skill.index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="hidden md:block text-center text-white/60 text-sm mt-10">
          For full skill list download the resume
        </p>
      </section>

      <section
        id="experience"
        ref={experienceRef}
        className="scroll-mt-32 py-10 md:py-12"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          experienceAnimated 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Professional Experience
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
          </h2>
          <p className="text-sm md:text-lg text-white/70 mt-4 md:mt-6">
            <span className="hidden md:inline">A timeline shaped by security, engineering, and real-world problem-solving</span>
            <span className="md:hidden">Offensive security and engineering experience in one place</span>
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line - Desktop */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B0000] via-[#FF6A00] to-[#8B0000] hidden md:block" />
          
          {/* Vertical Timeline Line - Mobile (Centered) */}
          <div className="absolute left-1/2 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B0000] via-[#FF6A00] to-[#8B0000] -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Job 1: Help Desk Support Technician */}
            <div className={`relative transition-all duration-1000 ease-out md:pl-20 ${
              experienceItemsAnimated[0]
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            >
              {/* Timeline Marker - Diamond Shape - Desktop */}
              <div className="absolute left-0 md:left-4 top-6 hidden md:block">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>
              
              {/* Timeline Marker - Mobile (Top of card) */}
              <div className="absolute left-1/2 md:hidden -top-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>
              
              {/* Timeline Marker - Mobile (Bottom of card) */}
              <div className="absolute left-1/2 md:hidden -bottom-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>

              {/* Job Card */}
              <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] p-4 md:p-8 shadow-lg hover:shadow-xl hover:shadow-[#FF6A00]/20 transition-all duration-300 hover:-translate-y-2 md:w-full">
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1">Help Desk Support Technician</h3>
                    <p className="text-sm md:text-lg text-[#FF6A00] font-semibold">Florida Southern College</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30">
                    October 2022 – Present
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="hidden md:block text-sm font-semibold text-white/90 mb-3">Key Responsibilities</p>
                  <ul className="space-y-2 text-white/80 text-xs md:text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Tier-1 support for identity and access issues, resolving account lockouts and MFA problems for 100+ users.</span>
                        <span className="hidden md:inline">Provided Tier-1 support for identity and access issues, resolving account lockouts, MFA problems, and password resets for 100+ students and faculty.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Active Directory user management and secure authentication workflows.</span>
                        <span className="hidden md:inline">Performed Active Directory user management, permission adjustments, and secure authentication workflows, reinforcing enterprise identity-security fundamentals.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Troubleshot Windows endpoints, RDP connectivity, and school applications.</span>
                        <span className="hidden md:inline">Troubleshot Windows endpoints, RDP connectivity, school applications, and license management, developing a methodical and security-minded approach to problem solving.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Communicated technical steps clearly to support safe campus access.</span>
                        <span className="hidden md:inline">Communicated complex technical steps in a clear, user-friendly way, strengthening team efficiency and supporting safe access across campus systems.</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="hidden md:flex flex-wrap gap-2">
                  {["Active Directory", "Identity & Access Management", "Technical Support", "Troubleshooting", "IT Infrastructure"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B0000]/20 text-[#FF6A00] border border-[#8B0000]/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Job 2: Cybersecurity Intern */}
            <div className={`relative transition-all duration-1000 ease-out md:pl-20 ${
              experienceItemsAnimated[1]
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            >
              {/* Timeline Marker - Hexagon Shape - Desktop */}
              <div className="absolute left-0 md:left-4 top-6 hidden md:block">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#FF6A00] transform rotate-30 border-2 border-[#0D0D0D] shadow-lg shadow-[#8B0000]/30" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
                </div>
              </div>
              
              {/* Timeline Marker - Mobile (Top of card) */}
              <div className="absolute left-1/2 md:hidden -top-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#8B0000] to-[#FF6A00] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#8B0000]/30" />
              </div>
              
              {/* Timeline Marker - Mobile (Bottom of card) */}
              <div className="absolute left-1/2 md:hidden -bottom-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#8B0000] to-[#FF6A00] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#8B0000]/30" />
              </div>

              {/* Job Card */}
              <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] p-4 md:p-8 shadow-lg hover:shadow-xl hover:shadow-[#8B0000]/20 transition-all duration-300 hover:-translate-y-2 md:w-full">
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1">Cybersecurity Intern</h3>
                    <p className="text-sm md:text-lg text-[#FF6A00] font-semibold">Publix Supermarkets Corporate</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#8B0000]/20 text-[#FF6A00] border border-[#8B0000]/30">
                    May 2025 – July 2025
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="hidden md:block text-sm font-semibold text-white/90 mb-3">Key Responsibilities</p>
                  <ul className="space-y-2 text-white/80 text-xs md:text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Enhanced PowerShell domain-monitoring tool, increasing fraudulent domain detection by 50%.</span>
                        <span className="hidden md:inline">Enhanced a PowerShell-based domain-monitoring tool with SSL/WHOIS fingerprint analysis, increasing detection of fraudulent Publix domains by 50%.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Assisted red-team engineers with AD enumeration and privilege-escalation testing.</span>
                        <span className="hidden md:inline">Assisted senior red-team engineers with Active Directory enumeration, Kerberoasting validation, and Windows privilege-escalation testing during internal assessments.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Triaged 200+ alerts in Microsoft Defender using Splunk queries to identify detection gaps.</span>
                        <span className="hidden md:inline">Triaged and investigated 200+ alerts in Microsoft Defender and ServiceNow, using focused Splunk queries to reduce noise, speed up triage, and identify detection gaps.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Performed forensic E01 imaging and tuned SIEM thresholds for better detection accuracy.</span>
                        <span className="hidden md:inline">Performed forensic E01 endpoint imaging and tuned SIEM alert thresholds to sharpen detection accuracy and support both SOC workflows and offensive test coverage.</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="hidden md:flex flex-wrap gap-2">
                  {["PowerShell", "Splunk", "Microsoft Defender", "SIEM Tuning", "Active Directory", "Incident Response"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B0000]/20 text-[#FF6A00] border border-[#8B0000]/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Job 3: Software Engineer Intern */}
            <div className={`relative transition-all duration-1000 ease-out md:pl-20 ${
              experienceItemsAnimated[2]
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            >
              {/* Timeline Marker - Square with rounded corners - Desktop */}
              <div className="absolute left-0 md:left-4 top-6 hidden md:block">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] rounded-lg border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>
              
              {/* Timeline Marker - Mobile (Top of card) */}
              <div className="absolute left-1/2 md:hidden -top-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>
              
              {/* Timeline Marker - Mobile (Bottom of card) */}
              <div className="absolute left-1/2 md:hidden -bottom-3 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-[#FF6A00] to-[#8B0000] transform rotate-45 border-2 border-[#0D0D0D] shadow-lg shadow-[#FF6A00]/30" />
              </div>

              {/* Job Card */}
              <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] p-4 md:p-8 shadow-lg hover:shadow-xl hover:shadow-[#FF6A00]/20 transition-all duration-300 hover:-translate-y-2 md:w-full">
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1">Software Engineer Intern</h3>
                    <p className="text-sm md:text-lg text-[#FF6A00] font-semibold">Vertical Digital (Eleco Group)</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30">
                    May 2024 – Aug 2024
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <ul className="space-y-2 text-white/80 text-xs md:text-sm leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Designed secure RESTful APIs, improving data-flow efficiency by 40%.</span>
                        <span className="hidden md:inline">Designed and implemented secure, scalable RESTful APIs, improving data-flow efficiency by 40% and reinforcing backend reliability against misuse.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Optimized MongoDB operations, reducing query response times by 35%.</span>
                        <span className="hidden md:inline">Optimized large-dataset operations in MongoDB, reducing query response times by 35% and strengthening system performance under load.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Developed payment-processing engine, simulating 10,000+ transactions.</span>
                        <span className="hidden md:inline">Developed and rigorously tested a custom payment-processing engine, simulating 10,000+ transactions to validate data integrity and uncover edge-case failures.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF6A00] mt-1.5">▸</span>
                      <span className="md:inline">
                        <span className="md:hidden">Worked in Linux environments, supporting offensive-security tooling automation.</span>
                        <span className="hidden md:inline">Worked daily in Linux environments, leveraging scripting and debugging skills that later supported my offensive-security work and tooling automation.</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="hidden md:flex flex-wrap gap-2">
                  {["Java", "REST APIs", "MongoDB", "Linux", "JDBC", "API Security", "Backend Engineering"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B0000]/20 text-[#FF6A00] border border-[#8B0000]/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="scroll-mt-32 py-10 md:py-12"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          projectsAnimated 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
          </h2>
          <p className="text-sm md:text-lg text-white/70 mt-4 md:mt-6">
            Open-source security tools and automation scripts
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {/* RaptorRecon Project */}
          <div className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] overflow-hidden shadow-lg transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-[#FF6A00]/20 hover:-translate-y-2 flex flex-col ${
            projectsAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: projectsAnimated ? "0ms" : "0ms" }}
          >
            {/* Project Image - Full Width */}
            <div className="relative h-52 md:h-64 w-full bg-gradient-to-br from-[#8B0000]/20 to-[#FF6A00]/10 overflow-hidden">
              <img
                src="/raptor.webp"
                alt="RaptorRecon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Project Content */}
            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">RaptorRecon</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                <span className="md:hidden">Bash framework for fast OSCP-style recon across multiple targets.</span>
                <span className="hidden md:inline">Bash framework for fast OSCP-style recon across multiple targets. Orchestrates RustScan, Nmap, web enum, SMB/FTP/RPC probes, and drops everything into clean, timestamped per-host folders.</span>
              </p>

              <a
                href="https://github.com/vladimircuc/raptor-recon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-2 text-sm font-semibold text-[#FF6A00] transition-all hover:bg-[#FF6A00]/20 hover:border-[#FF6A00] hover:shadow-lg hover:shadow-[#FF6A00]/25 mt-auto w-fit"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* DragonMap Project */}
          <div className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-[#1a0a0a] overflow-hidden shadow-lg transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-[#8B0000]/20 hover:-translate-y-2 flex flex-col ${
            projectsAnimated 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: projectsAnimated ? "200ms" : "0ms" }}
          >
            {/* Project Image - Full Width */}
            <div className="relative h-52 md:h-64 w-full bg-gradient-to-br from-[#8B0000]/20 to-[#FF6A00]/10 overflow-hidden">
              <img
                src="/dragon.webp"
                alt="DragonMap"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Project Content */}
            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">DragonMap</h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                <span className="md:hidden">Bash script for credentialed Active Directory enumeration in assumed-breach scenarios.</span>
                <span className="hidden md:inline">Bash script for credentialed Active Directory enumeration in assumed-breach scenarios. Performs high-signal SMB/RPC/LDAP/DNS recon using valid creds and saves organized, timestamped output for each target.</span>
              </p>

              <a
                href="https://github.com/vladimircuc/dragon-map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-2 text-sm font-semibold text-[#FF6A00] transition-all hover:bg-[#FF6A00]/20 hover:border-[#FF6A00] hover:shadow-lg hover:shadow-[#FF6A00]/25 mt-auto w-fit"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/vladimircuc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm font-medium underline-offset-4 hover:underline"
          >
            <span>View All Projects</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="blog"
        ref={blogRef}
        className="scroll-mt-32 py-10 md:py-12"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          blogAnimated 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 relative inline-block">
            Featured Blog Posts
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
          </h2>
          <p className="text-sm md:text-lg text-white/70 mt-4 md:mt-6">
            <span className="hidden md:inline">Walkthroughs, notes, and lessons learned while breaking into boxes and sharpening my red-team mindset</span>
            <span className="md:hidden">Penetration testing walkthroughs and OSCP-style write-ups</span>
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Blog Post 1: OSCP */}
          <a
            href="https://medium.com/@vladimircuc007/i-passed-the-oscp-on-my-first-attempt-24882ce506a3"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block rounded-xl border-l-4 border-[#FF6A00] bg-gradient-to-r from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden shadow-lg transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-[#FF6A00]/20 hover:border-[#FF6A00] ${
              blogAnimated 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: blogAnimated ? "0ms" : "0ms" }}
          >
            <div className="p-6 flex items-start gap-6">
              {blogPosts[0]?.image ? (
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-[#FF6A00]/30">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#FF6A00]/20 to-[#8B0000]/10 border border-[#FF6A00]/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FF6A00]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#FF6A00] font-semibold uppercase tracking-wider">Certification</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/50">Medium</span>
                  {blogPosts[0]?.readingTime && (
                    <>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/50">{blogPosts[0].readingTime} min read</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6A00] transition-colors">
                  {blogPosts[0]?.title || "I Passed the OSCP on My First Attempt"}
                </h3>
                {blogPosts[0]?.subtitle && (
                  <p className="hidden md:block text-white/60 text-sm leading-relaxed mb-3">
                    {blogPosts[0].subtitle}
                  </p>
                )}
                <div className="flex items-center gap-2 text-[#FF6A00] text-xs font-medium">
                  <span>Read Article</span>
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* Blog Post 2: FLU Proving Grounds */}
          <a
            href="https://medium.com/@vladimircuc007/flu-proving-grounds-walkthrough-932250fecc69"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block rounded-xl border-l-4 border-[#8B0000] bg-gradient-to-r from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden shadow-lg transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-[#8B0000]/20 hover:border-[#FF4444] ${
              blogAnimated 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: blogAnimated ? "200ms" : "0ms" }}
          >
            <div className="p-6 flex items-start gap-6">
              {blogPosts[1].image ? (
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-[#8B0000]/30">
                  <img
                    src={blogPosts[1].image}
                    alt={blogPosts[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#8B0000]/20 to-[#FF6A00]/10 border border-[#8B0000]/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#FF4444]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#FF4444] font-semibold uppercase tracking-wider">Walkthrough</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/50">Medium</span>
                  {blogPosts[1].readingTime && (
                    <>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/50">{blogPosts[1].readingTime} min read</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF4444] transition-colors">
                  {blogPosts[1].title}
                </h3>
                {blogPosts[1].subtitle && (
                  <p className="hidden md:block text-white/60 text-sm leading-relaxed mb-3">
                    {blogPosts[1].subtitle}
                  </p>
                )}
                <div className="flex items-center gap-2 text-[#FF4444] text-xs font-medium">
                  <span>Read Article</span>
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* Blog Post 3: Mzeeav PG Walkthrough */}
          <a
            href="https://medium.com/@vladimircuc007/mzeeav-pg-walkthrough-b086b9cb9c7f"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block rounded-xl border-l-4 border-[#5B21B6] bg-gradient-to-r from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden shadow-lg transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-[#5B21B6]/20 hover:border-[#8B5CF6] ${
              blogAnimated 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: blogAnimated ? "400ms" : "0ms" }}
          >
            <div className="p-6 flex items-start gap-6">
              {blogPosts[2].image ? (
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-[#5B21B6]/30">
                  <img
                    src={blogPosts[2].image}
                    alt={blogPosts[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#5B21B6]/20 to-[#4C1D95]/10 border border-[#5B21B6]/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#8B5CF6] font-semibold uppercase tracking-wider">Walkthrough</span>
                  <span className="text-xs text-white/40">•</span>
                  <span className="text-xs text-white/50">Medium</span>
                  {blogPosts[2].readingTime && (
                    <>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/50">{blogPosts[2].readingTime} min read</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {blogPosts[2].title}
                </h3>
                {blogPosts[2].subtitle && (
                  <p className="hidden md:block text-white/60 text-sm leading-relaxed mb-3">
                    {blogPosts[2].subtitle}
                  </p>
                )}
                <div className="flex items-center gap-2 text-[#8B5CF6] text-xs font-medium">
                  <span>Read Article</span>
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* View All on Medium Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://medium.com/@vladimircuc007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#FF6A00] transition-colors duration-300 text-sm font-medium underline-offset-4 hover:underline"
          >
            <span>View All on Medium</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`scroll-mt-32 py-2 md:py-4 md:-mb-8 border-t-0 md:border-t border-white/10 text-white/80 transition-all duration-1000 ease-out ${
          contactAnimated 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: Contact Info & Links */}
          <div className="space-y-6 md:space-y-6 lg:pb-32">
            {/* Mobile Layout */}
            <div className="md:hidden space-y-5">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-3 relative inline-block">
                  Let&apos;s Connect
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Whether it&apos;s red-team work, lab write-ups, or building tooling for offensive security,
                  I&apos;m always open to interesting problems and collaborations.
                </p>
              </div>

              {/* Phone Button */}
              <a
                href="tel:+18633387723"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#FF6A00]/50 bg-[#FF6A00]/10 px-5 py-3 text-base font-semibold text-[#FF6A00] transition-all active:bg-[#FF6A00]/20 active:border-[#FF6A00]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(863) 338-7723</span>
              </a>

              {/* Social Links - Grid Layout */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition-all active:border-[#FF6A00]/60 active:bg-[#FF6A00]/10 active:text-[#FF6A00]"
                  >
                    <span className="text-[#FF6A00] [&_svg]:h-5 [&_svg]:w-5">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block space-y-6">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 relative inline-block">
                  Let&apos;s Connect
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6A00]" />
                </h2>
                <p className="mt-4 text-sm lg:text-base text-white/70 max-w-md">
                  Whether it&apos;s red-team work, lab write-ups, or building tooling for offensive security,
                  I&apos;m always open to interesting problems and collaborations.
                </p>
              </div>

              <div className="space-y-3 text-sm lg:text-base">
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="h-5 w-5 text-[#FF6A00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Lakeland, FL (US Eastern Time)</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <svg className="h-5 w-5 text-[#FF6A00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(863) 338-7723</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Preferred Channels
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs lg:text-sm font-semibold text-white/80 transition-all hover:border-[#FF6A00]/60 hover:bg-[#FF6A00]/10 hover:text-[#FF6A00] hover:-translate-y-0.5"
                    >
                      <span className="text-[#FF6A00] [&_svg]:h-4 [&_svg]:w-4 lg:[&_svg]:h-5 lg:[&_svg]:w-5">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phishing Detection Mini-Game */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505] p-5 md:p-6 shadow-xl shadow-[#8B0000]/30 font-mono text-xs text-white/80">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  </span>
                  <span>phish-terminal</span>
                </div>
                <span className="text-[10px] text-white/40">vlad@lab:~/attachments</span>
              </div>

              <div className="mb-4">
                <p className="text-sm md:text-base text-[#FF6A00]/90 font-semibold">
                  {phishMessage}
                </p>
              </div>

              <div className="space-y-2">
                {[
                  {
                    id: "exe",
                    label: "payments_january_final_REAL.pdf.exe",
                    isCorrect: false,
                    message: "Totally legit. Definitely not ransomware 😭",
                  },
                  {
                    id: "vbucks",
                    label: "free_vbucks_2025.zip",
                    isCorrect: false,
                    message: "Congrats! You just unlocked Malware Royale 👑",
                  },
                  {
                    id: "resume",
                    label: "resume.pdf",
                    isCorrect: true,
                    message: "Surprisingly not malware. Wild. 📄",
                  },
                  {
                    id: "jpg",
                    label: "omg_virus.jpg",
                    isCorrect: false,
                    message: "At least it’s honest about being a virus 🤣",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setSelectedPhishOption(option.id);
                      if (option.isCorrect) {
                        setHasPassedPhishTest(true);
                        setPhishMessage("Surprisingly not malware. Wild. 📄");
                      } else {
                        setPhishMessage(option.message);
                      }
                    }}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-xs md:text-sm transition-all duration-200 ${
                      selectedPhishOption === option.id
                        ? option.isCorrect
                          ? "border-[#22c55e]/70 bg-[#22c55e]/10 text-white"
                          : "border-[#8B0000]/70 bg-[#8B0000]/20 text-white"
                        : "border-white/10 bg-[#050505] hover:border-[#FF6A00]/60 hover:bg-[#FF6A00]/5"
                    }`}
                  >
                    <span className="font-mono">{option.label}</span>
                  </button>
                ))}
              </div>

              {/* Hidden resume button that appears after correct answer */}
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  hasPassedPhishTest
                    ? "max-h-24 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 translate-y-2"
                }`}
              >
                <div className="pt-2 flex justify-center">
                  <a
                    href="/Vladimir_Cuc_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/60 bg-[#FF6A00]/15 px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-wide text-[#FF6A00] shadow-[0_0_18px_rgba(255,106,0,0.35)] transition-all hover:bg-[#FF6A00]/25 hover:border-[#FF6A00] hover:-translate-y-0.5"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
