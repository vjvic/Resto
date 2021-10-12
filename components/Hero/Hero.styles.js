import styled from "styled-components";
import { Flex } from "styles/Flex";

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  margin: auto;
  height: 100vh;

  @media ${({ theme }) => theme.breakpoints.md} {
    text-align: center;
    display: block;
    height: 100vh;
    padding-top: 40px;

    ${Flex} {
      justify-content: center;
    }
  }
`;

export const HeroTextContent = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: bold;
    padding: 0.5rem 0;
  }

  p {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.2rem;
    padding-bottom: 1.5rem;
    opacity: 0.8;
  }
`;

export const HeroImage = styled.div`
  margin-left: auto;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 1.2rem;

    img {
      margin: auto;
    }
  }
`;
