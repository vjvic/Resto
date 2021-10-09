import styled from "styled-components";
import { Section } from "styles/Section";
import { Card } from "styles/Card";

export const PopularContainer = styled(Section)`
  .react-multiple-carousel__arrow {
    background-color: ${({ theme }) => theme.color.primary};
  }

  .carousel-container {
    margin-top: 1rem;
    padding: 1rem 0;
    text-align: center;

    ${Card} {
      margin-left: 0.5rem;
    }

    img {
      margin: 0 auto;
      height: 100px;
      width: 100px;
      border-radius: 1000px;
      object-fit: cover;
    }
  }
`;

export const Info = styled.div`
  margin: auto;

  div {
    margin: auto;
  }

  h3 {
    margin: 0.5rem 0;
  }
`;
