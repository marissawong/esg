import { Box } from "@mui/material";
import { FC } from "react";
import { Clients } from "./clients";
import { Contact } from "./contact";
import { Services } from "./services";
import { Team } from "./team";

export const MainPage: FC = () => {
  return (
    <Box>
      <Services />
      <Clients />
      <Team />
      <Contact />
    </Box>
  );
};
