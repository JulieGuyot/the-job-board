import React from "react";
import "./App.css";
import Header from "./composants/Header";
import Jobs from "./composants/Jobs";
import Footer from "./composants/Footer";

function App() {
  return (
    <div className="container">
      <Header className="header" title="The Job Board" />
      <Jobs className="tableau" />
      <Footer className="footer" tech="React" lieu="Le Reacteur" name="Julie" />
    </div>
  );
}

export default App;
