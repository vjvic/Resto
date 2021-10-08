import styled from "styled-components";

export const Card = styled.div`
  padding: 1.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;
