import React from "react";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
