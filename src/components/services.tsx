import { Box } from "@mui/material";
import { FC } from "react";
import card1 from "./../assets/servicos_1.jpeg";
import card2 from "./../assets/servicos_2.webp";
import card3 from "./../assets/servicos_3.png";
import card4 from "./../assets/servicos_4.jpg";
import card5 from "./../assets/servicos_5.webp";
import card6 from "./../assets/servicos_6.jpg";
import styles from "./../styles/section.module.scss";
import { CustomCarousel } from "./customCarousel";
import { Section } from "./section";

const services = [
  {
    title: "gestão e consultoria completa no ACL",
    src: card1,
    description:
      "Gestão completa de unidades consumidoras no Mercado Livre de Energia, desde a análise de viabilidade até a gestão mensal dos contratos.",
  },
  {
    title: "abertura e estruturação de comercializadora",
    src: card2,
    description:
      "Acompanhamento da abertura de uma comercializadora de energia, além de indicação de profissionais e treinamento com as melhores práticas do mercado.",
  },
  {
    title: "avaliação de novas oportunidades",
    src: card3,
    description:
      "Análise de negócios em energia, visando apoiar regulatoriamente as oportunidades geradas para os clientes.",
  },
  {
    title: "treinamentos <br> corporativos",
    src: card6,
    description:
      "Realização de treinamentos <i>in company</i> acerca dos assuntos mais relevantes abordados no mercado de energia.",
  },
  {
    title: "desenvolvimento de ferramentas para gestão",
    src: card5,
    description:
      "Elaboração de planilhas ou software de acordo com as necessidades específicas de cada projeto.",
  },
  {
    title: "backoffice de gestoras e comercializadoras",
    src: card4,
    description:
      "Gestão da área do backoffice das empresas de energia, com registros de contratos, organização de informações e acompanhamentos.",
  },
];

export const Services: FC = () => {
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
      <CustomCarousel
        boxClassName={styles.servicesContainer}
        value={services}
        showIndicators={false}
        itemTemplate={(s) => (
          <Box className={styles.service}>
            <Box
              className={styles.image}
              sx={{ backgroundImage: `url(${s.src})` }}
            ></Box>
            <Box className={styles.overDiv}>
              <span
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: s.title }}
              ></span>
            </Box>
            <Box className={styles.text}>
              <Box className={styles.description}>
                <span
                  dangerouslySetInnerHTML={{ __html: s.description }}
                ></span>
              </Box>
            </Box>
          </Box>
        )}
      />
    </Section>
  );
};
