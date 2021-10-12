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

export const TextWrapper = styled.div`
  text-align: center;
  color: #fff;
  width: 500px;

  h2 {
    padding-bottom: 0.5;
  }

  p {
    padding-bottom: 1rem;
  }
`;
