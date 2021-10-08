import { Heading, Paragraph } from "styles/Section";
import { FeaturesContainer } from "./Features.styles";
import { Card } from "styles/Card";
import Image from "next/image";
import { Grid } from "styles/Grid";

const featuresData = [
  {
    title: "Healthy Foods",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: "/vegetables.png",
  },
  {
    title: "Fast Foods",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: "/fastfood.png",
  },
  {
    title: "Drinks",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    icon: "/drinks.png",
  },
];

const Features = () => {
  return (
    <FeaturesContainer>
      <Heading>
        <h2>Best way to eat healthy food</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </Heading>

      <Grid as="ul">
        {featuresData.map((item) => (
          <Card key={item.title} as="li">
            <Image src={item.icon} alt="basket" width="100px" height="100px" />
            <h3>{item.title}</h3>
            <Paragraph>{item.description}</Paragraph>
          </Card>
        ))}
      </Grid>
    </FeaturesContainer>
  );
};

export default Features;
