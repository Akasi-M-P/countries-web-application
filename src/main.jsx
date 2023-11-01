import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Theme/ThemeContext.jsx'
import { RegionProvider } from "./CountriesContext.jsx/CountriesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RegionProvider>
        <App />
      </RegionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
