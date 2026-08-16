/**
 * Single source of truth for the Deliver brand guideline content.
 * Sections render from this data, so copy edits happen in one place.
 */

export const brand = {
  name: "Deliver",
  legal: "PT Sarana Indonesia Maju",
  domain: "deliver.co.id",
  version: "v1.0 — 2026",
  tagline: "Integrated agriculture, operated smarter.",
  essence:
    "Deliver adalah smart poultry partnership — kami satukan permodalan, sapronak berkualitas, dan akses pasar dalam satu sistem yang terukur, supaya peternak broiler bisa fokus beternak dengan kepastian.",
} as const;

export const navItems = [
  { id: "cover", label: "00 · Cover" },
  { id: "story", label: "01 · Story" },
  { id: "logo", label: "02 · Logo" },
  { id: "color", label: "03 · Color" },
  { id: "type", label: "04 · Type" },
  { id: "tone", label: "05 · Voice" },
  { id: "imagery", label: "06 · Imagery" },
  { id: "apps", label: "07 · Apps" },
] as const;

export const problems = [
  {
    n: "PROBLEM 01",
    title: "Modal yang membebani",
    body: "Biaya input di muka terlalu berat untuk peternak rakyat. Deliver menanggung permodalan sapronak, peternak fokus ke operasional kandang.",
  },
  {
    n: "PROBLEM 02",
    title: "Sapronak tak menentu",
    body: "Kualitas DOC, pakan, dan obat sering tidak konsisten. Kami pasok sapronak terstandar dengan mutu yang bisa dipertanggungjawabkan.",
  },
  {
    n: "PROBLEM 03",
    title: "Akses pasar yang timpang",
    body: "Harga jual ditentukan pihak lain. Deliver menjamin serapan panen lewat jaringan pasar yang terhubung ke sistem.",
  },
] as const;

type LogoRule = {
  tag: "Do" | "Don't";
  body: string;
  /** modifier class on .dd__art */
  art?: string;
  logoHeight: number;
};

export const logoRules: LogoRule[] = [
  { tag: "Don't", body: "Jangan stretch, condensed, atau ubah proporsi.", art: "dd__art--stretch", logoHeight: 30 },
  { tag: "Don't", body: "Jangan ganti warna di luar palet brand.", art: "dd__art--hue", logoHeight: 32 },
  { tag: "Don't", body: "Jangan pakai versi kontras rendah di atas latar gelap.", art: "dd__art--dark", logoHeight: 32 },
  { tag: "Don't", body: "Jangan beri shadow, outline, atau taruh di atas foto ramai.", art: "dd__art--hatch", logoHeight: 32 },
  { tag: "Do", body: "Gunakan logo resmi dengan proporsi asli.", logoHeight: 34 },
  { tag: "Do", body: "Pastikan kontras cukup terhadap latar.", art: "dd__art--paper", logoHeight: 34 },
  { tag: "Do", body: "Gunakan versi berwarna di latar netral terang.", art: "dd__art--neutral", logoHeight: 34 },
  { tag: "Do", body: "Hormati clear space & ukuran minimum.", logoHeight: 34 },
];

export type Swatch = {
  name: string;
  role?: string;
  hex: string;
  rgb: string;
  use: string;
  /** light chips need a hairline so they read as a surface */
  outlined?: boolean;
};

export const primaryColors: Swatch[] = [
  {
    name: "Deliver Red",
    role: "— PRIMARY",
    hex: "#E12B1A",
    rgb: "225 · 43 · 26",
    use: "Aksen utama, CTA, highlight, blok brand. Gunakan untuk menarik perhatian — bukan untuk bidang besar.",
  },
  {
    name: "Ink",
    role: "— NEUTRAL",
    hex: "#17191C",
    rgb: "23 · 25 · 28",
    use: "Teks utama, headline, dan ikon. Near-black hangat — bukan hitam murni.",
  },
  {
    name: "Charcoal",
    role: "— NEUTRAL",
    hex: "#33373E",
    rgb: "51 · 55 · 62",
    use: "Body copy, sub-heading, ikon sekunder pada latar terang.",
  },
];

export const secondaryColors: Swatch[] = [
  {
    name: "Off-White",
    hex: "#F6F4F0",
    rgb: "246 · 244 · 240",
    use: "Latar utama dokumen, kartu, ruang napas.",
    outlined: true,
  },
  {
    name: "Grey",
    hex: "#8A8D92",
    rgb: "138 · 141 · 146",
    use: "Caption, metadata, label sekunder, hairline kuat.",
  },
  {
    name: "Deliver Green",
    role: "— ACCENT",
    hex: "#1F8A5B",
    rgb: "31 · 138 · 91",
    use: "Sinyal positif, status sehat, growth, validasi data. Hemat.",
  },
  {
    name: "Green Wash",
    role: "— ACCENT",
    hex: "#E4F0EA",
    rgb: "228 · 240 · 234",
    use: "Latar tag/badge positif, panel data lembut.",
    outlined: true,
  },
];

export const usageRatio = [
  { label: "Off-white / neutrals — 60%", short: "60%", flex: 60, bg: "#F6F4F0", fg: "#17191C", outlined: true },
  { label: "Ink (text & dark) — 25%", short: "25%", flex: 25, bg: "#17191C", fg: "#ffffff" },
  { label: "Deliver Red — 10%", short: "10%", flex: 10, bg: "#E12B1A", fg: "#ffffff" },
  { label: "Green accent — 5%", short: "5%", flex: 5, bg: "#1F8A5B", fg: "#ffffff" },
];

export const typefaces = [
  { role: "Headings · Display", name: "Sora", varName: "--display", weight: 800 },
  { role: "Body · Text", name: "IBM Plex Sans", varName: "--body", weight: 600 },
  { role: "Data · Labels", name: "IBM Plex Mono", varName: "--mono", weight: 500 },
] as const;

export const typeScale = [
  {
    label: "H1 — Display",
    meta: ["Sora ExtraBold", "clamp 40–68px · -3.5% LS", "Line 1.0"],
    className: "specimen-h1",
    sample: "Operated smarter.",
  },
  {
    label: "H2 — Section",
    meta: ["Sora Bold", "clamp 28–40px · -2.5% LS", "Line 1.1"],
    className: "specimen-h2",
    sample: "Kemitraan broiler yang terukur",
  },
  {
    label: "H3 — Subhead",
    meta: ["Sora SemiBold", "24px · -1.5% LS", "Line 1.2"],
    className: "specimen-h3",
    sample: "Modal, sapronak, dan pasar dalam satu sistem",
  },
  {
    label: "Body",
    meta: ["IBM Plex Sans Regular", "17px · 0 LS", "Line 1.65"],
    className: "specimen-body",
    sample:
      "Deliver menyatukan permodalan input, sapronak berkualitas, dan akses pasar untuk peternak broiler — dijalankan lewat sistem cerdas yang membuat setiap siklus transparan, terukur, dan bisa dipertanggungjawabkan.",
  },
  {
    label: "Caption / Label",
    meta: ["IBM Plex Mono Regular", "13px · +4% LS"],
    className: "specimen-cap",
    sample: "FIG. 04 — SIKLUS PANEN TERUKUR · DOC → PAKAN → PANEN → PASAR",
  },
];

export const principles = [
  {
    num: "01",
    title: "Clear & confident",
    body: "Langsung ke inti, kalimat pendek. Kami tahu yang kami bicarakan dan tidak bertele-tele.",
  },
  {
    num: "02",
    title: "No jargon berlebihan",
    body: "Teknologi adalah alat, bukan pamer. Jelaskan manfaat dalam bahasa peternak.",
  },
  {
    num: "03",
    title: "Fokus ke kepastian",
    body: "Bicara hasil yang terukur: modal tertanggung, sapronak terstandar, panen terserap.",
  },
  {
    num: "04",
    title: "Membumi & hormat",
    body: "Peternak adalah mitra setara. Tidak menggurui, tidak merendahkan.",
  },
];

export const sayNot = [
  {
    say: "“Modal sapronak kami tanggung. Anda fokus ke kandang, panen kami serap.”",
    not: "“Solusi disruptif berbasis AI untuk transformasi ekosistem unggas nasional.”",
  },
  {
    say: "“Setiap siklus tercatat — Anda tahu angka pakan, bobot, dan hasil panen.”",
    not: "“Leverage real-time data synergy untuk maximize ROI ternak Anda!!!”",
  },
  {
    say: "“Sapronak berkualitas, terstandar, datang tepat waktu.”",
    not: "“Premium next-gen input terbaik se-Indonesia, dijamin 100%!”",
  },
  {
    say: "“Mari tumbuh bareng. Kami partner Anda, bukan sekadar pemasok.”",
    not: "“Bergabunglah dengan revolusi! Jangan sampai ketinggalan!”",
  },
];

export const imageryDo = [
  "Cahaya alami, golden hour atau siang teduh",
  "Peternak sebagai subjek utama — tatapan & ekspresi nyata",
  "Lingkungan kandang autentik, sedikit di-styling",
  "Warna hangat, kontras natural, sedikit grain",
];

export const imageryDont = [
  "Stok foto korporat yang kaku & dingin",
  "Over-filter, HDR berlebihan, atau saturasi neon",
  "Subjek tersenyum dipaksakan ke kamera",
  "Menutupi wajah peternak demi “estetika”",
];
