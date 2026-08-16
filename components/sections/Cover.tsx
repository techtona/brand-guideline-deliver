import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

export function Cover() {
  return (
    <header className="cover" id="cover">
      <div className="cover__glow" />
      <div className="cover__top">
        <span>Brand Guidelines</span>
        <span>{brand.version}</span>
      </div>

      <div className="cover__center">
        <h1>
          <BrandLogo height={126} fluid className="cover__logo" priority />
          <span className="sr-only">{brand.name} — Brand Guidelines</span>
        </h1>
        <p className="cover__tagline">{brand.tagline}</p>
        <p className="cover__essence">{brand.essence}</p>
      </div>

      <div className="cover__bottom">
        <span>{brand.legal}</span>
        <span>{brand.domain}</span>
      </div>
    </header>
  );
}
