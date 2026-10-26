import { BrandLogo } from "@/components/BrandLogo";
import { logoRules } from "@/lib/brand";

const primaryStages = ["logo-stage--paper", "", "logo-stage--neutral"];

const logoDownloads = [
  { file: "deliver-logo-primary.svg", label: "Logo — primary" },
  { file: "deliver-logo-reverse.svg", label: "Logo — reverse (latar gelap)" },
  { file: "deliver-logo-mono-black.svg", label: "Logo — mono hitam" },
  { file: "deliver-logo-mono-white.svg", label: "Logo — mono putih" },
  { file: "deliver-symbol-primary.svg", label: "Simbol — primary" },
  { file: "deliver-symbol-reverse.svg", label: "Simbol — reverse" },
];

export function LogoSection() {
  return (
    <section className="section section--paper" id="logo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 — Logo</p>
          <h2 className="h-section">Logo kami tegas dan mudah dikenali. Lindungi keterbacaannya.</h2>
          <p className="lead mt-m">
            Logo Deliver memadukan simbol rooster berbentuk “D” dengan wordmark DELIVER — simbol energi
            dan kepastian. Gunakan versi resmi tanpa modifikasi.
          </p>
        </div>

        {/* primary lockups */}
        <div className="grid grid-3">
          {primaryStages.map((modifier, i) => (
            <div key={i} className={modifier ? `logo-stage ${modifier}` : "logo-stage"}>
              <BrandLogo height={56} />
            </div>
          ))}
        </div>
        <p className="mono grey mt-s" style={{ fontSize: 12 }}>
          Selalu tampilkan logo di latar terang dengan kontras cukup — putih, off-white, atau netral
          terang.
        </p>

        {/* clear space + min size */}
        <div className="grid grid-2 mt-l">
          <div>
            <h3 className="h-sub">Clear space</h3>
            <p className="grey mt-s" style={{ fontSize: 15 }}>
              Jaga ruang bebas minimal sebesar tinggi huruf “D” (1×) di setiap sisi. Tidak ada elemen
              lain yang boleh masuk ke zona ini.
            </p>
            <div className="logo-stage logo-stage--tall mt-m">
              <div className="clearspace">
                <div className="box">
                  <BrandLogo height={46} />
                  <span className="marker marker--top">1×</span>
                  <span className="marker marker--bottom">1×</span>
                  <span className="marker marker--left">1×</span>
                  <span className="marker marker--right">1×</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h-sub">Minimum size</h3>
            <p className="grey mt-s" style={{ fontSize: 15 }}>
              Agar detail simbol tetap terbaca, jangan tampilkan logo di bawah ukuran minimum berikut.
            </p>
            <div className="logo-stage logo-stage--sizes mt-m">
              <div className="size-spec">
                <BrandLogo height={40} />
                <div className="mono grey mt-s" style={{ fontSize: 11 }}>
                  Digital · 160px width min
                </div>
              </div>
              <div className="size-spec">
                <BrandLogo height={21} />
                <div className="mono grey mt-s" style={{ fontSize: 11 }}>
                  Print · 26mm width min
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* do's & don'ts */}
        <h3 className="h-sub mt-l">Do&rsquo;s &amp; Don&rsquo;ts</h3>
        <div className="grid grid-4 mt-m">
          {logoRules.map((rule, i) => (
            <div className="dd" key={i}>
              <div className={rule.art ? `dd__art ${rule.art}` : "dd__art"}>
                <BrandLogo height={rule.logoHeight} />
              </div>
              <div className="dd__cap">
                <span className={`dd__tag ${rule.tag === "Do" ? "dd__tag--yes" : "dd__tag--no"}`}>
                  {rule.tag}
                </span>
                <p>{rule.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* downloads */}
        <h3 className="h-sub mt-l">Unduh aset logo</h3>
        <p className="grey mt-s" style={{ fontSize: 15 }}>
          Paket lengkap berisi SVG, PDF, PNG (hingga 4000px), dan app icon dalam varian primary,
          reverse, mono hitam, dan mono putih.
        </p>
        <div className="grid grid-2 mt-m">
          <a className="dbtn dbtn--primary dl-btn" href="/brand-assets/deliver-logo-kit.zip" download>
            Logo kit lengkap (.zip) <span className="ar">↓</span>
          </a>
          <div className="dl-list">
            {logoDownloads.map(({ file, label }) => (
              <a key={file} href={`/brand-assets/logo/svg/${file}`} download>
                {label} <span className="mono grey">SVG</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
