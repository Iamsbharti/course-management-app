import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    else return <HomePage />;
  }
  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
}
export default App;
