import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);




// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb