import { Heading, Paragraph } from "styles/Section";
import { FeaturesContainer } from "./Features.styles";
import Image from "next/image";
import { Grid } from "styles/Grid";

const featuresData = [
  {
    title: "Quality Food",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: "/vegetables.png",
  },
  {
    title: "Delicious Taste",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: "/fastfood.png",
  },
  {
    title: "Easy Booking",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: "/drinks.png",
  },
];

const Features = () => {
  return (
    <FeaturesContainer>
      <Heading>
        <h2>Our Awesome Services </h2>
        {/*   <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p> */}
      </Heading>

      <Grid as="ul">
        {featuresData.map((item) => (
          <div key={item.title} as="li">
            <Image src={item.icon} alt="basket" width="100px" height="100px" />
            <h3>{item.title}</h3>
            <Paragraph>{item.description}</Paragraph>
          </div>
        ))}
      </Grid>
    </FeaturesContainer>
  );
};

export default Features;
