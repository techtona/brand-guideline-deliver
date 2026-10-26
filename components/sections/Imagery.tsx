import Image from "next/image";
import { brandIcons } from "@/components/BrandIcons";
import { imageryDo, imageryDont, mascotDo, mascotDont, mascotPoses } from "@/lib/brand";

const PHOTO_SIZES = "(max-width: 860px) 100vw, 33vw";

export function Imagery() {
  return (
    <section className="section section--off" id="imagery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">06 — Imagery &amp; Iconography</p>
          <h2 className="h-section">Peternak nyata, cahaya alami, tanpa drama.</h2>
          <p className="lead mt-m">
            Foto Deliver memuliakan subjeknya. Tampilkan peternak dan kandang sungguhan dalam cahaya
            natural — bermartabat, jujur, dan hangat. Hindari stok klise dan pencahayaan studio yang
            dingin.
          </p>
        </div>

        <div className="grid grid-3">
          <div className="ph ph--portrait">
            <Image
              src="/img/farmer-portrait.png"
              alt="Peternak di depan kandang"
              fill
              sizes={PHOTO_SIZES}
            />
          </div>
          <div className="ph ph--landscape">
            <Image src="/img/chicks-hands.png" alt="Detail tangan & DOC" fill sizes={PHOTO_SIZES} />
          </div>
          <div className="ph ph--landscape">
            <span>
              [ FOTO ]
              <br />
              Kandang &amp; sistem
              <br />— wide, terang
            </span>
          </div>
          <div className="ph ph--landscape">
            <Image
              src="/img/harvest-weighing.png"
              alt="Panen dan timbangan"
              fill
              sizes={PHOTO_SIZES}
            />
          </div>
          <div className="ph ph--landscape">
            <span>
              [ FOTO ]
              <br />
              Peternak + app
              <br />— teknologi membumi
            </span>
          </div>
        </div>

        <div className="grid grid-2 mt-l">
          <div>
            <h3 className="h-sub">Do</h3>
            <ul className="do-list mt-s">
              {imageryDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="h-sub">Don&rsquo;t</h3>
            <ul className="do-list dont-list mt-s">
              {imageryDont.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="h-sub mt-l">Maskot</h3>
        <p className="grey mt-s icon-note">
          Maskot ayam Deliver membawa sisi hangat dan ramah brand — untuk menyapa, mengedukasi, dan
          merayakan bersama peternak. Maskot mendampingi logo, tidak menggantikannya.
        </p>
        <div className="grid grid-2 mt-m">
          {mascotPoses.map((pose) => (
            <figure className="mascot" key={pose.src}>
              <div className={`mascot__stage mascot__stage--${pose.stage}`}>
                <Image src={pose.src} alt={pose.alt} width={pose.width} height={pose.height} sizes={PHOTO_SIZES} />
              </div>
              <figcaption className="mono grey">{pose.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="grid grid-2 mt-m">
          <ul className="do-list">
            {mascotDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="do-list dont-list">
            {mascotDont.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <a className="dbtn dbtn--primary dl-btn mascot__dl mt-m" href="/brand-assets/deliver-mascot-kit.zip" download>
          Unduh maskot (.zip · PNG transparan) <span className="ar">↓</span>
        </a>

        <h3 className="h-sub mt-l">Iconography</h3>
        <p className="grey mt-s icon-note">
          Ikon Deliver bergaya line / minimal: stroke konsisten ±2px, sudut sedikit membulat,
          geometris, dan tidak ramai. Satu warna (Navy, Ink, atau Red) per ikon.
        </p>
        <div className="icon-grid mt-m">
          {brandIcons.map((icon) => (
            <div className="icon-cell" key={icon.label}>
              {icon.art}
              <span className="lbl">{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
