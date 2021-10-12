import { HeroContainer, HeroTextContent, HeroImage } from "./Hero.styles";
import { Button, BtnOutline } from "styles/Button";
import { Flex } from "styles/Flex";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  const router = useRouter();

  return (
    <HeroContainer
      as={motion.section}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <HeroTextContent>
        <motion.h2 variants={item}> The Drink and Dine</motion.h2>
        <motion.p variants={item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </motion.p>
        <Flex>
          <Button
            as={motion.button}
            variants={item}
            color="primary"
            size="lg"
            round
            onClick={() => router.push("/book")}
          >
            Book Now
          </Button>
          <BtnOutline as={motion.button} variants={item} size="lg" round>
            Menu
          </BtnOutline>
        </Flex>
      </HeroTextContent>

      <HeroImage as={motion.div} variants={item}>
        {/* eslint-disable */}
        <img src="/hero.png" alt="Food" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
