export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">About Me</h1>

      <p className="text-slate-200 leading-relaxed">
        I&apos;m Vladimir Cuc, an OSCP-certified penetration tester and
        cybersecurity student focused on offensive security. I enjoy breaking
        into networks (legally), documenting my approach, and building scripts
        to automate recon and exploitation.
      </p>

      <p className="text-slate-200 leading-relaxed">
        This page will later include my resume, key projects, certifications,
        and links to GitHub and Medium. Right now it&apos;s just a placeholder
        to test routing, Tailwind styling, and hosting.
      </p>
    </div>
  );
}
