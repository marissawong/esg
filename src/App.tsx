import { Box } from "@mui/material";
import "primereact/resources/primereact.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Clients } from "./components/clients";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { Team } from "./components/team";
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
      <React.StrictMode>
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
          <Box>
            <Services />
            <Clients />
            <Team />
            <Contact />
          </Box>
        </div>
        <div className="footer">&copy; 2023 ESG Energia</div>
      </React.StrictMode>
    </div>
  );
}

export default App;
