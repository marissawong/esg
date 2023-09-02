import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { Clientes } from "./components/clientes";
import { Equipe } from "./components/equipe";
import { Header } from "./components/header";
import { Servicos } from "./components/servicos";
import "./styles/global.scss";

function App() {
  const [customClass, setCustomClass] = useState("");

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   const overDiv =
    //     document.getElementsByClassName("overDiv")[0]?.clientHeight;
    //   let customClass = "";
    //   if (window.scrollY > 350) {
    //     customClass += "sticky";
    //   } else {
    //     customClass += "";
    //   }
    //   setCustomClass(() => customClass);
    // });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Box sx={{ minHeight: "650px" }} className={customClass}>
          <Box className="mainImage"></Box>
          <Box className="overDiv">
            <Box className="mainText">
              especialistas em redução de custos com{" "}
              <span className="highlight">energia</span>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: "10rem" }}>
          <Servicos />
          <Clientes />
          <Equipe />
        </Box>
      </div>
    </div>
  );
}

export default App;
