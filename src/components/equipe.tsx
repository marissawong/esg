import { Box } from "@mui/material";
import { FC } from "react";
import arthur from "./../assets/time/arthur.jpg";
import diego from "./../assets/time/diego.jpeg";
import rafael from "./../assets/time/rafael.jpg";
import silla from "./../assets/time/silla.jpg";
import styles from "./../styles/section.module.scss";

const time = [
  {
    name: "Arthur",
    lastName: "Faerman",
    src: arthur,
    description:
      "Formado em Engenharia de Petróleo pela Universidade Federal Fluminense, iniciando a carreira no mercado de energia em 2017, com atuação em diversas áreas.",
    subtitle: "cargo/área",
  },
  {
    name: "Diego",
    lastName: "Medeiros",
    src: diego,
    description:
      "Administrador de empresas e sócio-diretor da Protton Energia, ingressou na área de energia em 2008 passando pelas duas maiores distribuidoras do Rio de Janeiro, Light e Enel.",
    subtitle: "cargo/área",
  },
  {
    name: "Mario",
    lastName: "Sampaio",
    src: diego,
    description:
      "Administrador de empresas e sócio-diretor da Protton Energia, ingressou na área de energia em 2008 passando pelas duas maiores distribuidoras do Rio de Janeiro, Light e Enel.",
    subtitle: "cargo/área",
  },
  {
    name: "Rafael",
    lastName: "Barreto",
    src: rafael,
    description:
      "Formado em Engenharia Mecânica pela Universidade Federal Fluminense, começou a atuar no mercado de energia em 2017, com fono no ambiente de contratação livre.",
    subtitle: "cargo/área",
  },
  {
    name: "Silla",
    lastName: "Motta",
    src: silla,
    description:
      "Graduada em Administração de Empresas e com MBA em Marketing, atua no setor elétrico desde 1997 nos segmentos de distribuição, geração, comercialização e gestão de energia.",
    subtitle: "cargo/área",
  },
];

export const Equipe: FC = () => {
  return (
    <Box id="equipe" sx={{ my: "10rem" }}>
      <Box className={styles.teamContainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ fontSize: "3.5rem", fontWeight: 500 }}>equipe</Box>
          <Box className={styles.subtitle}>
            conheça nosso <span className={styles.highlight}>time</span> de
            especialistas
          </Box>
        </Box>
        {time.map((t) => (
          <Box className={styles.person}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={t.src} alt={t.name} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: "1rem",
                  alignItems: "start",
                }}
              >
                <Box className={styles.name}>{t.name}</Box>
                <Box className={styles.name}>{t.lastName}</Box>
                <Box className={styles.personSubtitle}>{t.subtitle}</Box>
              </Box>
            </Box>
            <Box className={styles.description}>{t.description}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
