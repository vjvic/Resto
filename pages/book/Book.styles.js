import styled from "styled-components";
import { Button } from "styles/Button";

export const BookContainer = styled.section`
  min-height: 100vh;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  ${Button} {
    margin-top: 1.5rem;
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

export const BookImg = styled.div`
  img {
    margin-left: auto;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const BookTitle = styled.h1`
  padding: 1rem 0;
`;

export const InputWrapper = styled.div`
  margin: 1rem 0;

  input {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background: none;

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.primary};
    }
  }

  label {
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
`;
