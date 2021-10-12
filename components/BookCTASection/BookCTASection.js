import { Button } from "styles/Button";
import { TextWrapper, BookCTAContainer } from "./BookCTASection.styles";
import { useRouter } from "next/router";
import useAnimate from "components/hooks/useAnimate";

const BookCTASection = () => {
  const router = useRouter();
  const { ref, animation, motion } = useAnimate();

  return (
    <BookCTAContainer ref={ref} as={motion.section} animate={animation}>
      <TextWrapper>
        <h2>Book A Table Now</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <Button
          color="primary"
          size="lg"
          round
          onClick={() => router.push("/book")}
        >
          Book Now
        </Button>
      </TextWrapper>
    </BookCTAContainer>
  );
};

export default BookCTASection;
