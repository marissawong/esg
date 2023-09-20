import { Box, Typography } from "@mui/material";
import { FC } from "react";
import enecelenergia from "./../assets/clients/enecelenergia.png";
import grupotriex from "./../assets/clients/grupotriex.png";
import meritoenergia from "./../assets/clients/meritoenergia.png";
import nevienergia from "./../assets/clients/nevienergia.png";
import styles from "./../styles/section.module.scss";
import { CustomCarousel } from "./customCarousel";
import { Section } from "./section";

const clients = [
  {
    autor: "Aderson Rodrigues",
    empresa: "Mérito Energia",
    logo: meritoenergia,
    description:
      "Gostaria de fazer um breve comentário sobre nossa amiga Silla Motta. Durante o tempo em que trabalhou conosco, na Mérito demonstrou uma dedicação excepcional às suas responsabilidades e uma habilidade notável para superar desafios. Sua ética de trabalho exemplar e habilidades de colaboração foram inestimáveis para nossa equipe e o sucesso de nossos projetos. Sem dúvida, a Silla é uma pessoa excepcional e um ativo valioso para qualquer equipe.",
  },
  {
    autor: "Vinícius Piretelli",
    empresa: "Neví Energia",
    logo: nevienergia,
    description:
      "Gostaria de agradecer, em nome da Neví Energia, pela incrível contribuição que você trouxe à nossa empresa. Os seus trabalhos contribuíram para uma experiência verdadeiramente enriquecedora. Obrigado por compartilhar toda sua expertise do mundo da energia, pela competência e humildade em abrir várias oportunidades de trabalhos e parcerias. Você fez a diferença e estamos extremamente gratos por isso!",
  },
  {
    autor: "Paulo Strini",
    empresa: "Grupo Triex",
    logo: grupotriex,
    description:
      "A Silla tem sido muito eficiente como nossa assessora no mercado de Energia Elétrica, em nosso projeto de constituição da comercializadora de energia. Demonstra consistentemente conhecimento técnico e competências para nos orientar, sempre de maneira assertiva. Admiro sua habilidade de resolver problemas e a forma como ela lidera pessoas. É muito carismática, reconhecida no mercado, e tem um jeito especial de identificar e juntar competência nas pessoas, em busca de um objetivo.",
  },
  {
    autor: "Álvaro Augusto",
    empresa: "Enecel Energia",
    logo: enecelenergia,
    description:
      "Silla é realmente uma pessoa notável. Sua perspicácia e talento têm sido de grande ajuda para nós no mercado de energia. Estamos muito gratos por sua contribuição e inspiração contínuas.",
  },
  {
    autor: "Eduardo Porto",
    empresa: "Grupo Rialma",
    description:
      "A Silla é uma profissional que respira bons negócios, fomentando e contribuindo para o desenvolvimento setor elétrico. Seu trabalho vai além de uma consultoria especializada, contando um networking completo, mantendo-se sempre a frente das tendências e inovações. Tudo reflete na profissional respeitada que é, com ações e trabalhos concretos.",
  },
  {
    autor: "Landell Michellin",
    empresa: "Seven Energy",
    description:
      "Gostaria de relatar e deixar meu comentário sobre esta profissional extraordinária chamada Silla Motta. Pessoa íntegra, de alta confiabilidade e conhecimento do setor elétrico, em especial o mercado livre de energia. A Silla foi um divisor de águas para nossa empresa, mostrando os caminhos e fazendo pontes profissionais de alta qualidade, o que colaborou para nosso crescimento e desenvolvimento enquanto empresa. Silla Motta é uma consultora que toda empresa deveria ter.",
  },
];

export const Clients: FC = () => {
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
      <Box className={styles.clientsLogos}>
        <Box className={styles.clientsRow}>
          {clients.map(
            (s, index) =>
              s.logo && (
                <img
                  key={`client_${index}`}
                  className={styles.first}
                  src={s.logo}
                  alt={s.empresa}
                />
              )
          )}
        </Box>
      </Box>

      <CustomCarousel
        boxClassName={styles.quotes}
        value={clients}
        showIndicators={false}
        itemTemplate={(d) => (
          <Box className={styles.quoteBox}>
            <Box
              className={styles.quote}
              sx={{ ".MuiTypography-root": { lineHeight: 0.9 } }}
            >
              <Typography
                sx={{ fontSize: "5rem", fontWeight: 700, userSelect: "none" }}
              >
                “
              </Typography>
              <Box className={styles.texto}>{d.description}</Box>
            </Box>
            <Box className={styles.autor}>— {d.autor}</Box>
            <Box className={styles.empresa}>{d.empresa}</Box>
          </Box>
        )}
      />
    </Section>
  );
};
