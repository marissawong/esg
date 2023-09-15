import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton, Link, Stack } from "@mui/material";
import { FC } from "react";
import styles from "./../styles/section.module.scss";

export const networks = [
  {
    url: "https://api.whatsapp.com/send?phone=5521983505292&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20ESG%20Energia%A1!",
    name: "whatsapp",
    label: "(21) 98350-5292",
    icon: <WhatsAppIcon />,
    shortchut: true,
  },
  {
    url: "https://www.linkedin.com/company/esg-energia",
    name: "linkedin",
    label: "esg-energia",
    icon: <LinkedInIcon />,
  },
  {
    url: "mailto:contato@esgenergia.com",
    name: "e-mail",
    label: "contato@esgenergia.com",
    icon: <AlternateEmailIcon />,
    copy: "contato@esgenergia.com",
    shortchut: true,
  },
  // {
  //   url: "",
  //   name: "instagram",
  //   label: "esgenergia",
  //   icon: <InstagramIcon />,
  // },
];

export const Contact: FC = () => {
  return (
    <Box id="contato" className={styles.contactContainer}>
      <Box className={styles.contactSection}>
        <Box className={styles.header}>
          <Box className={styles.title}>fale conosco</Box>
          <Box className={styles.item}>
            <LocationOnIcon />
            Rio de Janeiro | São Paulo | Florianópolis
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
              key={`contato_footer_${n.name}`}
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
              <Stack direction="row" gap={0} alignItems="center">
                <Link className={styles.label}>{n.label}</Link>
                {/* {n.copy && <ContentCopyIcon sx={{ fontSize: "1rem" }} />} */}
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
