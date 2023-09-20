import { Box } from "@mui/material";
import { Carousel, CarouselProps } from "primereact/carousel";
import { FC } from "react";

interface CustomCarouselProps extends CarouselProps {
  boxClassName?: string;
}

const breakpoints = [
  { breakpoint: 500, numVisible: 1, numScroll: 1 },
  { breakpoint: 1000, numVisible: 2, numScroll: 1 },
  { breakpoint: 1400, numVisible: 3, numScroll: 1 },
];

const getWidth = () => {
  const windowWidth = window.innerWidth;
  let items = 1;

  if (windowWidth <= 500) {
    items = breakpoints.find((b) => b.breakpoint === 500)!.numVisible;
  } else if (windowWidth <= 1000) {
    items = breakpoints.find((b) => b.breakpoint === 1000)!.numVisible;
  } else if (windowWidth <= 1400) {
    items = breakpoints.find((b) => b.breakpoint === 1400)!.numVisible;
  } else {
    items = 4;
  }

  return items;
};

export const CustomCarousel: FC<CustomCarouselProps> = ({ ...props }) => {
  return (
    <Box
      className={props.boxClassName}
      sx={{
        ".p-carousel-item": {
          flex: `1 0 ${100 / getWidth()}%`,
        },
      }}
    >
      <Carousel {...props} numVisible={getWidth()} numScroll={1}></Carousel>
    </Box>
  );
};
