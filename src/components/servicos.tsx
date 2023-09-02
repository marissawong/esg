import { Box } from "@mui/material";
import { Carousel } from "primereact/carousel";
import { FC } from "react";
import card1 from "./../assets/servicos_1.jpeg";
import card2 from "./../assets/servicos_2.webp";
import card3 from "./../assets/servicos_3.png";
import card4 from "./../assets/servicos_4.jpg";
import styles from "./../styles/section.module.scss";
import { Section } from "./section";

const services = [
  {
    title: "serviço 1",
    src: card1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    title: "serviço 2",
    src: card2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    title: "serviço 3",
    src: card3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    title: "serviço 4",
    src: card4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    title: "serviço 5",
    src: card4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    title: "serviço 6",
    src: card4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
];

export const Servicos: FC = () => {
  return (
    <Section
      id="servicos"
      title="serviços"
      subtitle={
        <>
          conheça os serviços que oferecemos para a sua{" "}
          <span className={styles.highlight}>empresa</span>
        </>
      }
    >
      <Box className={styles.servicesContainer}>
        <Carousel
          value={services}
          numVisible={Math.round(window.innerWidth / 500)}
          numScroll={1}
          showIndicators={false}
          itemTemplate={(s) => (
            <Box className={styles.service}>
              <Box
                className={styles.image}
                sx={{ backgroundImage: `url(${s.src})` }}
              ></Box>
              <Box className={styles.overDiv}>
                <span className={styles.title}>{s.title}</span>
              </Box>
              <Box className={styles.text}>
                <Box className={styles.description}>{s.description}</Box>
              </Box>
            </Box>
          )}
        />
      </Box>
    </Section>
  );
};
