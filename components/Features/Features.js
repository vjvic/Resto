import { Heading, Paragraph } from "styles/Section";
import { FeaturesContainer } from "./Features.styles";
import Image from "next/image";
import { Grid } from "styles/Grid";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { RiEmotionHappyLine } from "@react-icons/all-files/ri/RiEmotionHappyLine";
import { BiTimer } from "@react-icons/all-files/bi/BiTimer";

const featuresData = [
  {
    title: "Quality Food",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: <AiOutlineStar size={50} />,
  },
  {
    title: "Delicious Taste",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: <RiEmotionHappyLine size={50} />,
  },
  {
    title: "Easy Booking",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ",
    icon: <BiTimer size={50} />,
  },
];

const Features = () => {
  return (
    <FeaturesContainer>
      <Grid as="ul">
        {featuresData.map((item) => (
          <div key={item.title} as="li">
            <div>{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <Paragraph>{item.description}</Paragraph>
            </div>
          </div>
        ))}
      </Grid>
    </FeaturesContainer>
  );
};

export default Features;
