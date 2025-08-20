import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import ChatSlider from "./Components/ChatSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ChatSlider />
    </div>
  );
}

export default App;
