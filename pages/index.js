import Hero from "components/Hero/Hero";
import InfoSection from "components/InfoSection/InfoSection";
import { infoData } from "components/InfoSection/InfoObj";
import BookCTASection from "components/BookCTASection/BookCTASection";
import Popular from "components/Popular/Popular";

export default function Home() {
  return (
    <div>
      <Hero />
      {infoData.map((item) => (
        <InfoSection key={item.id} {...item} />
      ))}
      <Popular />
      <BookCTASection />
    </div>
  );
}
