import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Stack } from "@mui/material";
import { FC } from "react";
import arthur from "./../assets/time/arthur.jpg";
import diego from "./../assets/time/diego.jpeg";
import mario from "./../assets/time/mario.jpeg";
import rafael from "./../assets/time/rafael.jpg";
import silla from "./../assets/time/silla.jpg";
import styles from "./../styles/section.module.scss";

const time = [
  {
    name: "Silla",
    lastName: "Motta",
    src: silla,
    description:
      "Graduada em Administração de Empresas e com MBA em Marketing, atua no setor elétrico desde 1997 nos segmentos de distribuição, geração, comercialização e gestão de energia. Integrou a equipe de implementação das comercializadoras de empresas como a Light, Energisa, Enel, entre outras.",
    subtitle: "silla@esgenergia.com",
    linkedin: "silla-motta®-313a8549",
    phone: "11995851065",
  },
  {
    name: "Arthur",
    lastName: "Faerman",
    src: arthur,
    description:
      "Formado em Engenharia de Petróleo pela Universidade Federal Fluminense, iniciando a carreira no mercado de energia em 2017, com atuação em diversas áreas. Em 2018, co-fundou a Protton Energia, empresa que surgiu com a necessidade de suprir a demanda por gestão especializada em energia.",
    subtitle: "arthur@esgenergia.com",
    linkedin: "arthurfaerman",
    phone: "22999448842",
  },
  {
    name: "Diego",
    lastName: "Medeiros",
    src: diego,
    description:
      "Administrador de empresas e sócio-diretor da Protton Energia, ingressou na área de energia em 2008, passando pelas duas maiores distribuidoras do Rio de Janeiro, Light e Enel. Sócio co-fundador da Protton Energia, onde é responsável pela gestão comercial e de relacionamentos com novos clientes.",
    subtitle: "diego@esgenergia.com",
    linkedin: "diegomedeiros1983",
    phone: "21987687122",
  },
  {
    name: "Rafael",
    lastName: "Barreto",
    src: rafael,
    description:
      "Formado em Engenharia Mecânica pela Universidade Federal Fluminense, começou a atuar no mercado de energia em 2017, com foco no ambiente de contratação livre. Sócio co-fundador da Protton Energia, atuando com cursos e capacitações voltadas ao setor elétrico, análises e previsões futuras de oportunidades de negócio.",
    subtitle: "rafael@esgenergia.com",
    linkedin: "barreto-rafael",
    phone: "21983505292",
  },
  {
    name: "Mario",
    lastName: "Sampaio",
    src: mario,
    description:
      "Dourando em Administração de Empresas pela Universidade de Rosário, atua como consultor e head de projetos da PEX - Portfolio Expert, empresa especializada em gerenciamento de projetos, programas e portfólios. Há mais de 33 anos, atua como executivo e consultor em Gerenciamento Profissional de Projetos.",
    subtitle: "mario@esgenergia.com",
    linkedin: "mario-luis-sampaio-pereira-4ba369184",
    phone: "21999944784",
  },
];

export const Team: FC = () => {
  return (
    <Box id="equipe" className={styles.teamContainer}>
      <Box className={styles.header}>
        <Box className={styles.title}>equipe</Box>
        <Box className={styles.subtitle}>
          conheça nosso <span className={styles.highlight}>time</span> de
          especialistas
        </Box>
      </Box>
      {time.map((t, index) => (
        <Box key={`team_${index}`} className={styles.person}>
          <Box className={styles.mainInfo}>
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
              <Stack direction="row" gap={0.5} marginTop={0.5}>
                <LinkedInIcon
                  sx={{ fontSize: "1.2rem", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/in/${t.linkedin}/`,
                      "_blank"
                    )
                  }
                />
                <WhatsAppIcon
                  sx={{ fontSize: "1.2rem", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?phone=55${t.phone}&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20ESG%20Energia%A1!`,
                      "_blank"
                    )
                  }
                />
              </Stack>
            </Box>
          </Box>
          <Box className={styles.description}>{t.description}</Box>
        </Box>
      ))}
    </Box>
  );
};
