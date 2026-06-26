// Generates public/og-image.png (1200x630) — the social share preview card
// shown when vladimircuc.com is linked on LinkedIn, iMessage, Slack, etc.
// Run: node scripts/gen-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "og-image.png");

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#140707"/>
      <stop offset="0.5" stop-color="#070707"/>
      <stop offset="1" stop-color="#140101"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8B0000"/>
      <stop offset="0.5" stop-color="#FF6A00"/>
      <stop offset="1" stop-color="#8B0000"/>
    </linearGradient>
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="0.6" stop-color="#FF8A3A"/>
      <stop offset="1" stop-color="#FFFFFF"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.05" r="0.9">
      <stop offset="0" stop-color="#FF6A00" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#FF6A00" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="10" fill="url(#accent)"/>
  <rect x="36" y="36" width="1128" height="558" rx="26" fill="none" stroke="#FF6A00" stroke-opacity="0.18" stroke-width="2"/>

  <g transform="translate(985,95)" stroke="#FF6A00" stroke-opacity="0.9" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M75 5 L150 38 V92 C150 152 113 192 75 210 C37 192 0 152 0 92 V38 Z" fill="#FF6A00" fill-opacity="0.06"/>
    <rect x="48" y="92" width="54" height="50" rx="10" fill="#FF6A00" fill-opacity="0.12"/>
    <path d="M60 92 V78 a15 15 0 0 1 30 0 V92"/>
  </g>

  <text x="100" y="208" font-family="Arial, Helvetica, sans-serif" font-size="28" letter-spacing="9" font-weight="700" fill="#FF6A00">OSCP+ &amp; SECURITY+ CERTIFIED</text>
  <text x="92" y="328" font-family="Arial, Helvetica, sans-serif" font-size="110" font-weight="800" fill="url(#nameGrad)">Vladimir Cuc</text>
  <text x="100" y="398" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="600" fill="#FFFFFF" fill-opacity="0.92">Security Engineer &amp; Penetration Tester</text>
  <text x="100" y="470" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#FFFFFF" fill-opacity="0.62">Fortune 100 SOC   ·   Offensive Tooling   ·   Application Security</text>
  <text x="100" y="556" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#FF6A00">vladimircuc.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("wrote", out);
