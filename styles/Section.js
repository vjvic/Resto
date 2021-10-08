import styled from "styled-components";
import { Container } from "./Container";

export const Section = styled(Container)`
  padding: 4rem 0;
`;

export const Heading = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    padding: 1rem;
  }

  p {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  opacity: 0.8;
`;
