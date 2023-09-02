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
    <Box id={id} className={styles.section}>
      <Box className={styles.header}>
        <Box className={styles.title}>{title}</Box>
        <Box className={styles.subtitle}>{subtitle}</Box>
      </Box>

      {children}
    </Box>
  );
};
