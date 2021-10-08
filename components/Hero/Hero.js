import { HeroContainer, HeroTextContent, HeroImage } from "./Hero.styles";
import { Button, BtnOutline } from "styles/Button";
import { Flex } from "styles/Flex";

const Hero = () => {
  return (
    <HeroContainer as="section">
      <HeroTextContent>
        <h2>The Drink and dine</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <Flex>
          <Button color="primary" size="lg" round>
            Book Now
          </Button>
          <BtnOutline size="lg" round>
            Menu
          </BtnOutline>
        </Flex>
      </HeroTextContent>

      <HeroImage>
        {/* eslint-disable */}
        <img src="/hero.png" alt="Food" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
