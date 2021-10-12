import styled from "styled-components";
import { Container } from "styles/Container";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.color.primary};
  color: #fff;
  padding: 40px 0;
`;

export const FooterRow = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
