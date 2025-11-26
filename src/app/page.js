export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Vladimir Cuc
        </h1>
        <p className="text-lg text-slate-300">
          Offensive Security &amp; Cybersecurity Portfolio
        </p>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold mb-3">Welcome</h2>
        <p className="text-slate-200 leading-relaxed">
          This site will become my central hub for penetration testing projects,
          certifications, Medium write-ups, and GitHub repos. For now, it&apos;s
          just a simple mock version so I can test the setup and hosting flow.
        </p>
      </section>
    </div>
  );
}
