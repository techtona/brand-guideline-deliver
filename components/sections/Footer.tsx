import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot__in">
        <div>
          <BrandLogo height={30} />
          <div className="foot__tag">{brand.tagline}</div>
        </div>
        <div className="foot__meta">
          <div>BRAND GUIDELINES {brand.version}</div>
          <div>
            {brand.legal.toUpperCase()} · {brand.domain.toUpperCase()}
          </div>
        </div>
      </div>
    </footer>
  );
}
