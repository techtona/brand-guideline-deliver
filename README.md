# Deliver — Brand Guidelines

Situs brand guideline Deliver (PT Sarana Indonesia Maju) — satu halaman scroll berisi cover + 7 seksi,
dibangun dengan Next.js App Router dan siap deploy di Vercel.

## Menjalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run lint
```

Butuh Node.js 20.9+ (mengikuti syarat Next.js 16).

## Struktur

```
app/
  layout.tsx           font (Sora, IBM Plex Sans, IBM Plex Mono) + metadata & OG
  page.tsx             merangkai seluruh seksi
  globals.css          seluruh style brand — token warna & tipografi ada di :root
  icon.svg             favicon "D."
  opengraph-image.tsx  OG image 1200×630 yang di-generate saat build
components/
  BrandLogo.tsx        wrapper next/image untuk lockup logo
  BrandIcons.tsx       12 ikon line brand (inline SVG)
  SideNav.tsx          navigasi samping + penanda seksi aktif (client component)
  sections/            Cover, Story, LogoSection, Color, Typography, Tone, Imagery,
                       Applications, Footer
lib/brand.ts           seluruh konten: warna, skala tipografi, prinsip voice, do/don't
public/
  logo/                logo-deliver.png, logo-deliver-reverse.png
  img/                 foto peternak, DOC, panen
source/                materi asli dari zip (HTML, CSS, PPTX) — referensi saja
```

### Mengubah isi

- **Teks & data** (palet warna, prinsip tone of voice, do/don't, skala tipografi): `lib/brand.ts`.
- **Token desain** (warna, font, lebar maksimum, padding): blok `:root` di `app/globals.css`.
- **Foto**: ganti file di `public/img/`, lalu sesuaikan `components/sections/Imagery.tsx`.
  Dua slot masih placeholder — "Kandang & sistem" dan "Peternak + app".

## Deploy ke Vercel

1. Push repo ini ke GitHub/GitLab.
2. Di Vercel, **Add New → Project**, pilih repo. Framework terdeteksi otomatis (Next.js);
   tidak ada environment variable wajib.
3. Setelah domain final diketahui, set `NEXT_PUBLIC_SITE_URL` (mis. `https://brand.deliver.co.id`)
   supaya URL absolut di metadata Open Graph benar.

Alternatif lewat CLI:

```bash
npx vercel        # preview
npx vercel --prod # production
```

`source/` dan file `.zip` dikecualikan dari deploy lewat `.vercelignore`, jadi tidak menambah
ukuran upload.
