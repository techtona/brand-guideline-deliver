import Image from "next/image";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

/** Small round contact icon used on the business card (white glyph on navy). */
function CardIcon({ children }: { children: ReactNode }) {
  return (
    <svg className="bizcard__icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" />
      <g fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

const taglineLead = brand.tagline.slice(0, brand.tagline.lastIndexOf(" "));
const taglineLast = brand.tagline.slice(brand.tagline.lastIndexOf(" ") + 1);

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
              <span className="k">89 × 51 mm</span>
            </div>
            <div className="app-card__stage app-card__stage--cards">
              <div className="bizcard bizcard--front">
                <Image
                  className="bizcard__mark"
                  src="/brand-assets/logo/svg/deliver-symbol-primary.svg"
                  alt=""
                  width={172}
                  height={190}
                />
                <BrandLogo height={22} />
                <div className="bizcard__id">
                  <b>Rafi Pratama</b>
                  <span>Partnership Lead</span>
                </div>
                <ul className="bizcard__contact">
                  <li>
                    <CardIcon>
                      <path d="M8.5 6.5h2l1 3-1.5 1a7 7 0 0 0 3.5 3.5l1-1.5 3 1v2a1.5 1.5 0 0 1-1.5 1.5A10 10 0 0 1 7 8a1.5 1.5 0 0 1 1.5-1.5z" />
                    </CardIcon>
                    +62 812 0000 0000
                  </li>
                  <li>
                    <CardIcon>
                      <rect x="6" y="8" width="12" height="8.5" rx="1.2" />
                      <path d="m6.5 8.8 5.5 4 5.5-4" />
                    </CardIcon>
                    rafi@{brand.domain}
                  </li>
                  <li>
                    <CardIcon>
                      <path d="M12 18.5s4.5-4.2 4.5-7.8a4.5 4.5 0 0 0-9 0c0 3.6 4.5 7.8 4.5 7.8z" />
                      <circle cx="12" cy="10.7" r="1.6" />
                    </CardIcon>
                    <span>
                      Foresta Business Loft 2 Unit 8, Jl. BSD Raya Utama No.21,
                      <br />
                      Pagedangan, Tangerang Regency, Banten 15339
                    </span>
                  </li>
                </ul>
                <div className="bizcard__stripe" />
              </div>
              <div className="bizcard bizcard--back">
                <Image
                  className="bizcard__mark"
                  src="/brand-assets/logo/svg/deliver-symbol-mono-white.svg"
                  alt=""
                  width={172}
                  height={190}
                />
                <div className="bizcard__claim">
                  <div className="h">
                    {taglineLead}
                    <br />
                    <span>{taglineLast}</span>
                  </div>
                  <div className="k">KEMITRAAN BROILER</div>
                  <i className="bizcard__rule" />
                </div>
                <div className="bizcard__foot">
                  <span className="bizcard__web">
                    <CardIcon>
                      <circle cx="12" cy="12" r="5.5" />
                      <path d="M6.5 12h11M12 6.5c1.8 1.6 2.6 3.4 2.6 5.5s-.8 3.9-2.6 5.5c-1.8-1.6-2.6-3.4-2.6-5.5s.8-3.9 2.6-5.5z" />
                    </CardIcon>
                    {brand.domain}
                  </span>
                  <span className="bizcard__legal">{brand.legal.toUpperCase()}</span>
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
