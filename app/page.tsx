import { SideNav } from "@/components/SideNav";
import { Applications } from "@/components/sections/Applications";
import { Color } from "@/components/sections/Color";
import { Cover } from "@/components/sections/Cover";
import { Footer } from "@/components/sections/Footer";
import { Imagery } from "@/components/sections/Imagery";
import { LogoSection } from "@/components/sections/LogoSection";
import { Story } from "@/components/sections/Story";
import { Tone } from "@/components/sections/Tone";
import { Typography } from "@/components/sections/Typography";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#story">
        Lewati ke konten
      </a>
      <SideNav />
      <Cover />
      <main>
        <Story />
        <LogoSection />
        <Color />
        <Typography />
        <Tone />
        <Imagery />
        <Applications />
      </main>
      <Footer />
    </>
  );
}
