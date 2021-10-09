import styled from "styled-components";
import { Container } from "styles/Container";
import { Button } from "styles/Button";

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;

  header {
    display: flex;
    align-items: center;

    h1 {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const NavItems = styled.ul`
  display: flex;
  grid-gap: 1rem;

  li {
    transition: ${({ theme }) => theme.transition.ease};

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    position: fixed;
    background: #fff;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    top: 0;
    left: ${({ isToggle }) => (isToggle ? 0 : "-100%")};
    height: 100%;
    width: 60%;
    display: block;
    transition: ${({ theme }) => theme.transition.ease};

    li {
      padding: 1rem;

      &:hover {
        background: lightgray;
      }
    }
  }
`;

export const Bars = styled.button`
  cursor: pointer;
  display: none;
  background: none;
  border: none;

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;
