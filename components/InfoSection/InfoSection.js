import { Paragraph } from "styles/Section";
import {
  InfoSectionContainer,
  InfoText,
  InfoImage,
  InfoTitle,
} from "./infoSection.styles";
import useAnimate from "components/hooks/useAnimate";

const InfoSection = ({ title, description, img, imgStart }) => {
  const { ref, animation, motion } = useAnimate();

  return (
    <InfoSectionContainer
      ref={ref}
      as={motion.section}
      animate={animation}
      imgStart={imgStart}
    >
      <InfoText>
        <InfoTitle>{title}</InfoTitle>
        <Paragraph>{description}</Paragraph>
      </InfoText>
      <InfoImage>
        {/* eslint-disable */}
        <img src={img} alt="info image" />
      </InfoImage>
    </InfoSectionContainer>
  );
};

export default InfoSection;
