import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, IconButton } from "@mui/material";
import { Sidebar } from "primereact/sidebar";
import { FC, useEffect, useState } from "react";
import { networks } from "./contact";

const menu = {
  servicos: "serviços",
  clientes: "clientes",
  equipe: "equipe",
};

export const Header: FC = () => {
  const [customClass, setCustomClass] = useState("white");
  const [open, setOpen] = useState(false);

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

  const scroll = (id: string) => {
    const element = document.getElementById(id)?.offsetTop;
    element && window.scrollTo({ top: element - 60, behavior: "smooth" });
  };

  return (
    <Box className={`header ${customClass}`}>
      {/* <Box className="headerBackground"></Box>
      <Box className="headerOverDiv"></Box> */}
      <Box className="headerContent">
        <Box
          className={`logo ${customClass}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></Box>
        <Box
          className="buttons"
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {Object.keys(menu).map((m) => (
            <Button key={`header_${m}`} onClick={() => scroll(m)}>
              {menu[m as keyof typeof menu]}
            </Button>
          ))}
          <Button className="main" onClick={() => scroll("contato")}>
            fale conosco
          </Button>
        </Box>
        <Box className="drawer">
          {networks
            .filter((n) => n.shortchut)
            .map((n) => (
              <IconButton
                key={`header_icon_${n.name}`}
                color="inherit"
                edge="end"
                onClick={() => window.open(n.url, "_blank")}
              >
                {n.icon}
              </IconButton>
            ))}
          <IconButton color="inherit" edge="end" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Sidebar
        style={{ maxWidth: "200px" }}
        position="right"
        visible={open}
        onHide={() => setOpen(false)}
        showCloseIcon={false}
      >
        <Box className="sidebar">
          <Box className="close">
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {Object.keys(menu).map((m) => (
            <Button
              key={`drawer_${m}`}
              onClick={() => {
                scroll(m);
                setOpen(false);
              }}
            >
              {menu[m as keyof typeof menu]}
            </Button>
          ))}
          <Button
            className="main"
            onClick={() => {
              scroll("contato");
              setOpen(false);
            }}
          >
            fale conosco
          </Button>
        </Box>
      </Sidebar>
    </Box>
  );
};
