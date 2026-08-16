import { primaryColors, secondaryColors, usageRatio, type Swatch } from "@/lib/brand";

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <div className="swatch">
      <div
        className={swatch.outlined ? "swatch__chip swatch__chip--outlined" : "swatch__chip"}
        style={{ background: swatch.hex }}
      />
      <div className="swatch__body">
        <p className="swatch__name">
          {swatch.name} {swatch.role ? <span className="swatch__role">{swatch.role}</span> : null}
        </p>
        <div className="swatch__row">
          <span>HEX</span>
          <span>{swatch.hex}</span>
        </div>
        <div className="swatch__row">
          <span>RGB</span>
          <span>{swatch.rgb}</span>
        </div>
        <p className="swatch__use">{swatch.use}</p>
      </div>
    </div>
  );
}

export function Color() {
  return (
    <section className="section section--off" id="color">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 — Color Palette</p>
          <h2 className="h-section">Satu merah yang berani, didasari netral yang tenang.</h2>
          <p className="lead mt-m">
            Deliver Red membawa energi dan kepastian; netral hangat menjaga dokumen tetap bersih dan
            terbaca; hijau dipakai hemat untuk sinyal positif dan data.
          </p>
        </div>

        <div className="grid grid-3">
          {primaryColors.map((swatch) => (
            <SwatchCard key={swatch.hex} swatch={swatch} />
          ))}
        </div>

        <div className="grid grid-4 mt-m">
          {secondaryColors.map((swatch) => (
            <SwatchCard key={swatch.hex} swatch={swatch} />
          ))}
        </div>

        <h3 className="h-sub mt-l">Suggested usage ratio</h3>
        <div className="ratio mt-m">
          {usageRatio.map((band) => (
            <div
              key={band.label}
              style={{ background: band.bg, color: band.fg, flex: band.flex }}
            >
              {band.short}
            </div>
          ))}
        </div>
        <div className="ratio-legend">
          {usageRatio.map((band) => (
            <span key={band.label}>
              <i
                className="dotc"
                style={{
                  background: band.bg,
                  border: band.outlined ? "1px solid var(--grey-line)" : undefined,
                }}
              />{" "}
              {band.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
