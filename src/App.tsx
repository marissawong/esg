import { Box } from "@mui/material";
// import "primereact/resources/primereact.min.css";
import "./App.css";
import { Clients } from "./components/clients";
import { Contact } from "./components/contact";
import { FloatingContact } from "./components/floatingContact";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { Team } from "./components/team";
import "./styles/global.scss";
import "./styles/primereact.css";

function App() {
  return (
    <div>
      <Header />
      <FloatingContact />
      <div>
        <Box sx={{ minHeight: "650px" }}>
          <Box className="mainImage"></Box>
          <Box className="overDiv">
            <Box className="mainText">
              especialistas em <span className="highlight">energia</span>
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
    </div>
  );
}

export default App;
