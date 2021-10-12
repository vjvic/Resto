import styled from "styled-components";

export const InfoSectionContainer = styled.section`
  /*  padding: 40px 0; */
  min-height: 50vh;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  align-items: center;
  grid-gap: 2rem;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const InfoText = styled.div`
  grid-area: col1;
`;

export const InfoImage = styled.div`
  grid-area: col2;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

export const InfoTitle = styled.h3`
  padding: 1rem 0;
  font-size: 1.8rem;
`;
