import "./globals.css";
import { HeaderNav } from "../components/HeaderNav";
import { BrandHome } from "../components/BrandHome";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Vladimir Cuc | Portfolio",
  description: "OSCP-certified penetration tester portfolio",
  icons: {
    icon: "/icon.png", // lives in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D0D0D] text-slate-100 antialiased">
        <div className="h-1 w-full bg-gradient-to-r from-[#8B0000] via-[#FF6A00] to-[#8B0000]" />

        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#060606cc] backdrop-blur-xl shadow-[0_10px_30px_rgba(139,0,0,0.25)]">
          <nav className="mx-auto flex w-full max-w-[1600px] items-center gap-4 px-4 py-4 sm:px-6 lg:px-10 xl:px-16">
            <BrandHome />

            <div className="ml-auto flex items-center gap-4">
              <HeaderNav />

              <a
                href="/Vladimir_Cuc_Resume.pdf"
                download
                className="group hidden items-center gap-2 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#FF6A00] shadow-[0_0_25px_rgba(255,106,0,0.25)] transition md:inline-flex md:hover:border-[#FF6A00] md:hover:bg-[#FF6A00]/20"
              >
                Download Resume
                <span className="relative h-4 w-3 overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center text-base transition-transform duration-500 -translate-y-0.5 md:group-hover:translate-y-6">
                    ↓
                  </span>
                </span>
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-[1600px] px-4 py-12 sm:px-6 lg:px-10 xl:px-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
