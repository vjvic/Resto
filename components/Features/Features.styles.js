import styled from "styled-components";
import { Section } from "styles/Section";
import { Grid } from "styles/Grid";
import { Container } from "styles/Container";

export const FeaturesContainer = styled.section`
  padding-bottom: 40px;

  ${Grid} {
    /*   text-align: center; */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 1rem;
    }

    h3 {
      padding: 0.5rem 0;
    }
  }
`;
