import { typefaces, typeScale } from "@/lib/brand";

export function Typography() {
  return (
    <section className="section section--paper" id="type">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 — Typography</p>
          <h2 className="h-section">Tegas untuk suara, nyaman untuk cerita.</h2>
          <p className="lead mt-m">
            Dua keluarga huruf open-source yang gratis dan tersedia luas. Open Sans — sudah ada di
            Google Docs, Canva, dan banyak perangkat — dipakai untuk headline yang tegas sekaligus teks
            panjang yang nyaman dibaca; IBM Plex Mono menandai data dan label — refleksi sifat brand
            yang terukur.
          </p>
        </div>

        <div className="grid grid-3">
          {typefaces.map((face) => (
            <div className="font-card" key={face.role}>
              <div className="role">{face.role}</div>
              <div
                className="big"
                style={{ fontFamily: `var(${face.varName})`, fontWeight: face.weight }}
              >
                Aa
              </div>
              <div className="name">{face.name}</div>
              <p className="glyphs">
                ABCDEFGHIJKLM
                <br />
                abcdefghijklm 0123456789
              </p>
            </div>
          ))}
        </div>

        <h3 className="h-sub mt-l">Hierarchy</h3>
        <div className="mt-s">
          {typeScale.map((row) => (
            <div className="type-row" key={row.label}>
              <div className="type-meta">
                <b>{row.label}</b>
                {row.meta.map((line, i) => (
                  <span key={line}>
                    {i > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </div>
              <div className={row.className}>{row.sample}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
