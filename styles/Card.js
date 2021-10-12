import styled from "styled-components";

export const Card = styled.div`
  padding: 1.3rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: #fafafa;
`;
