import { PopularContainer, SliderWrapper, Info } from "./Popular.styles";
import Image from "next/image";
import { Card } from "styles/Card";
import { Paragraph } from "styles/Section";
import ReactStars from "react-rating-stars-component";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const dummyDishItem = [
  {
    img: "/dishes/dish1.jpg",
    title: "Dish1",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish2.jpg",
    title: "Dish2",
    desctiption:
      "Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish3.jpg",
    title: "Dish3",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish4.jpg",
    title: "Dish4",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish5.jpg",
    title: "Dish5",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish6.jpg",
    title: "Dish6",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
  {
    img: "/dishes/dish7.jpg",
    title: "Dish7",
    desctiption:
      "  Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.",
  },
];

const Popular = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <PopularContainer>
      <h2>Popular Dishes</h2>
      <Carousel
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr
        responsive={responsive}
      >
        {dummyDishItem.map((item) => (
          <Card key={item.img}>
            {/*   eslint-disable */}
            <img src={item.img} alt="food" />

            <Info>
              <ReactStars
                isHalf={true}
                value={5}
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <h3>{item.title}</h3>
              <Paragraph>{item.desctiption}</Paragraph>
            </Info>
          </Card>
        ))}
      </Carousel>
    </PopularContainer>
  );
};

export default Popular;
