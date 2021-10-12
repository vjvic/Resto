import { Button } from "styles/Button";
import { TextWrapper } from "./BookCTASection.styles";
import { useRouter } from "next/router";
import useAnimate from "components/hooks/useAnimate";
import styled from "styled-components";

export const BookCTAContainer = styled.section`
  background: url("/foodBg.jpg") no-repeat center;
  background-size: cover;
  min-height: 300px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-bottom: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  > * {
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background: ${({ theme }) => theme.overlay};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

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
