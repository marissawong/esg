import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton, Link } from "@mui/material";
import { FC } from "react";
import styles from "./../styles/section.module.scss";

const networks = [
  {
    url: "",
    name: "whatsapp",
    label: "(xx) xxxxx-xxxx",
    icon: <WhatsAppIcon />,
  },
  {
    url: "",
    name: "linkedin",
    label: "esgenergia",
    icon: <LinkedInIcon />,
  },
  {
    url: "",
    name: "e-mail",
    label: "contato@esgenergia.com.br",
    icon: <AlternateEmailIcon />,
  },
  {
    url: "",
    name: "instagram",
    label: "esgenergia",
    icon: <InstagramIcon />,
  },
];

export const Contact: FC = () => {
  return (
    <Box id="contato" className={styles.contactContainer}>
      <Box className={styles.contactSection}>
        <Box className={styles.header}>
          <Box className={styles.title}>fale conosco</Box>
          <Box className={styles.item}>
            <LocationOnIcon />
            rua da esg energia, n. xx - cidade, rj
          </Box>
          <Box className={styles.item}>
            <ScheduleIcon />
            segunda à sexta de 9h às 18h
          </Box>
        </Box>
      </Box>
      <Box className={styles.contactSection}>
        <Box className={styles.contactLinks}>
          {networks.map((n) => (
            <Box
              className={styles.contactItem}
              onClick={() => window.open(n.url, "_blank")}
            >
              <Box className={styles.chip}>
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={() => undefined}
                  size="large"
                >
                  {n.icon}
                </IconButton>

                {n.name}
              </Box>
              <Link className={styles.label}>{n.label}</Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
