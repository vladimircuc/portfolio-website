import "./globals.css";

export const metadata = {
  title: "Vladimir Cuc | Offensive Security Portfolio",
  description: "OSCP-certified penetration tester portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
          <nav className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-3">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Vlad&apos;s Portfolio
            </a>
            <a
              href="/"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              About
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
