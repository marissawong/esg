import { Box } from "@mui/material";
// import "primereact/resources/primereact.min.css";
import "./App.css";
import { FloatingContact } from "./components/floatingContact";
import { Header } from "./components/header";
import { MainPage } from "./components/main";
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
        <MainPage />
      </div>
      <div className="footer">&copy; 2023 ESG Energia</div>
    </div>
  );
}

export default App;
