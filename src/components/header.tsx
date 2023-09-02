import { Box, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";

const menu = {
  servicos: "serviços",
  clientes: "clientes",
  equipe: "equipe",
};

export const Header: FC = () => {
  const [customClass, setCustomClass] = useState("white");

  useEffect(() => {
    const overDiv = document.getElementsByClassName("overDiv")[0]?.clientHeight;
    window.addEventListener("scroll", () => {
      let customClass = "";
      if (window.scrollY > overDiv) {
        customClass += "scrolled";
      } else {
        customClass += "white";
      }
      setCustomClass(() => customClass);
    });
  }, []);

  return (
    <Box className={`header ${customClass}`}>
      {/* <Box className="headerBackground"></Box>
      <Box className="headerOverDiv"></Box> */}
      <Box className="headerContent">
        <Box className={`logo ${customClass}`}></Box>
        <Box
          className="buttons"
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {Object.keys(menu).map((m) => (
            <Button
              onClick={() =>
                document
                  .getElementById(m)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {menu[m as keyof typeof menu]}
            </Button>
          ))}
          <Button className="main">fale conosco</Button>
        </Box>
      </Box>
    </Box>
  );
};
