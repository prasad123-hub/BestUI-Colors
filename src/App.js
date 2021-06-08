import React from "react";
import BlueSection from "./components/BlueSection";
import GreenSection from "./components/GreenSection";
import Header from "./components/Header";
import RedSection from "./components/RedSection";
import YellowSection from "./components/YellowSection";

function App() {
  return (
    <div>
      <Header />
      <RedSection />
      <YellowSection />
      <BlueSection />
      <GreenSection />
    </div>
  );
}

export default App;
