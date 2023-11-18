import { Box } from "@mui/material";
import { Carousel, CarouselProps } from "primereact/carousel";
import { FC } from "react";

interface CustomCarouselProps extends CarouselProps {
  boxClassName?: string;
}

const breakpoints = [850, 1200, 1400];

const responsiveOptions = [
  { breakpoint: breakpoints[0], numVisible: 1, numScroll: 1 },
  { breakpoint: breakpoints[1], numVisible: 2, numScroll: 1 },
  { breakpoint: breakpoints[2], numVisible: 3, numScroll: 1 },
];

const getWidth = () => {
  const windowWidth = window.innerWidth;
  let items = 1;

  const bOptions = responsiveOptions.find((b) => windowWidth <= b.breakpoint);
  if (bOptions) {
    items = bOptions!.numVisible;
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
