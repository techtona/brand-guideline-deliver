import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

export function Applications() {
  return (
    <section className="section section--paper" id="apps">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">07 — Applications</p>
          <h2 className="h-section">Sistem yang sama, di mana pun brand muncul.</h2>
          <p className="lead mt-m">
            Contoh penerapan pada titik sentuh utama. Perhatikan konsistensi rasio warna, peran
            tipografi, dan disiplin whitespace.
          </p>
        </div>

        <div className="grid grid-2">
          {/* business card */}
          <div className="app-card">
            <div className="app-card__head">
              <span className="t">Business Card</span>
              <span className="k">90 × 54 mm</span>
            </div>
            <div className="app-card__stage app-card__stage--cards">
              <div className="bizcard bizcard--front">
                <BrandLogo height={15} />
                <div className="meta">
                  <b>Rafi Pratama</b>
                  Partnership Lead
                  <br />
                  <br />
                  rafi@deliver.co.id · +62 812 0000 0000
                  <br />
                  deliver.co.id
                </div>
              </div>
              <div className="bizcard bizcard--back">
                <div>
                  <div className="h">{brand.tagline}</div>
                  <div className="k mono">KEMITRAAN BROILER</div>
                </div>
              </div>
            </div>
          </div>

          {/* social post */}
          <div className="app-card">
            <div className="app-card__head">
              <span className="t">Social Post</span>
              <span className="k">1080 × 1080</span>
            </div>
            <div className="app-card__stage">
              <div className="social">
                <div className="social__img">
                  <span>[ FOTO PETERNAK ]</span>
                </div>
                <div className="social__bar">
                  <div className="k">Kemitraan Broiler</div>
                  <div className="h">
                    Modal kami tanggung.
                    <br />
                    Panen kami serap.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* slide header */}
          <div className="app-card">
            <div className="app-card__head">
              <span className="t">Slide Header</span>
              <span className="k">16 : 9</span>
            </div>
            <div className="app-card__stage">
              <div className="slide">
                <div className="slide__top" />
                <div className="slide__body">
                  <div className="slide__k">01 — Overview</div>
                  <div>
                    <div className="slide__h">{brand.tagline}</div>
                  </div>
                  <div className="slide__foot">
                    <BrandLogo height={13} />
                    <span>PT SARANA INDONESIA MAJU</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* app button states */}
          <div className="app-card">
            <div className="app-card__head">
              <span className="t">App UI — Button</span>
              <span className="k">States</span>
            </div>
            <div className="app-card__stage">
              <div className="btnset">
                <div>
                  <div className="state-k">Primary · Default</div>
                  <button type="button" className="dbtn dbtn--primary">
                    Mulai kemitraan <span className="ar">→</span>
                  </button>
                </div>
                <div>
                  <div className="state-k">Primary · Hover/Press</div>
                  <button type="button" className="dbtn dbtn--hover">
                    Mulai kemitraan <span className="ar">→</span>
                  </button>
                </div>
                <div>
                  <div className="state-k">Secondary · Ghost</div>
                  <button type="button" className="dbtn dbtn--ghost">
                    Lihat simulasi <span className="ar">→</span>
                  </button>
                </div>
                <div>
                  <div className="state-k">Disabled</div>
                  <button type="button" className="dbtn dbtn--disabled" disabled>
                    Mulai kemitraan <span className="ar">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
