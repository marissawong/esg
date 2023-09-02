import { Box, Typography } from "@mui/material";
import { FC } from "react";
import bidenergy from "./../assets/clients/bidenergy.jpeg";
import bravoenergia from "./../assets/clients/bravoenergia.jpeg";
import climatempo from "./../assets/clients/climatempo.png";
import hospitalicarai from "./../assets/clients/hospitalicarai.png";
import oceaneering from "./../assets/clients/oceaneering.png";
import santamonica from "./../assets/clients/santamonica.jpeg";
import tenbrasil from "./../assets/clients/tenbrasil.png";
import styles from "./../styles/section.module.scss";
import { Section } from "./section";

const clients = [
  {
    title: "Oceaneering",
    src: oceaneering,
    class: "first",
  },
  {
    title: "Climatempo",
    src: climatempo,
    class: "first",
  },
  {
    title: "TenBrasil Distribuidora",
    src: tenbrasil,
    class: "first",
  },
  {
    title: "Bravo Energia",
    src: bravoenergia,
    class: "second",
  },
  {
    title: "Hospital Icaraí",
    src: hospitalicarai,
    class: "second",
  },
  {
    title: "Colégio Santa Mônica",
    src: santamonica,
    class: "second",
  },
  {
    title: "BID Energy",
    src: bidenergy,
    class: "second",
  },
];

const depoimentos = [
  {
    empresa: "Empresa X",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    empresa: "Empresa Y",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
  {
    empresa: "Empresa Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.",
  },
];

export const Clientes: FC = () => {
  return (
    <Section
      id="clientes"
      title="clientes"
      subtitle={
        <>
          veja quem <span className={styles.highlight}>confia</span> no nosso
          trabalho
        </>
      }
    >
      <Box className={styles.clientsContainer}>
        <Box className={styles.clientsRow}>
          {clients
            .filter((c) => c.class === "first")
            .map((s) => (
              <img className={styles[s.class]} src={s.src} alt={s.title} />
            ))}
        </Box>
        {/* <Box className={styles.clientsRow}>
          {clients
            .filter((c) => c.class === "second")
            .map((s) => (
              <img className={styles[s.class]} src={s.src} alt={s.title} />
            ))}
        </Box> */}
      </Box>

      <Box className={styles.depoimentosContainer}>
        {depoimentos.map((d) => (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              className={styles.depoimento}
              sx={{ ".MuiTypography-root": { lineHeight: 0.9 } }}
            >
              <Typography
                sx={{ fontSize: "5rem", fontWeight: 700, userSelect: "none" }}
              >
                “
              </Typography>
              <Box className={styles.texto}>{d.description}</Box>
            </Box>
            <Box className={styles.empresa}>— {d.empresa}</Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
};
