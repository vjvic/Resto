import styled from "styled-components";
import { Section } from "styles/Section";
import { Grid } from "styles/Grid";

export const FeaturesContainer = styled(Section)`
  ${Grid} {
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    h3 {
      padding: 0.5rem;
    }
  }
`;
