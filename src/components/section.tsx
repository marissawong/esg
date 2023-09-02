import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import styles from "./../styles/section.module.scss";

export const Section: FC<{
  id: string;
  children: ReactNode;
  title: string;
  subtitle: ReactNode;
}> = ({ id, children, title, subtitle }) => {
  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        px: "4rem",
        py: "2rem",
        mb: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ fontSize: "3.5rem", fontWeight: 500 }}>{title}</Box>
        <Box className={styles.subtitle}>{subtitle}</Box>
      </Box>

      {children}
    </Box>
  );
};
