"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-[#060606cc] via-[#080808cc] to-[#060606cc] backdrop-blur-xl shadow-[0_-10px_30px_rgba(139,0,0,0.25)]">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex items-center justify-center">
          <p className="text-center text-sm text-white/50">
            © {currentYear} Vladimir Cuc. All rights reserved.
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-[#8B0000] via-[#FF6A00] to-[#8B0000]" />
    </footer>
  );
}

