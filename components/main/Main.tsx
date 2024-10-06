import React from "react";
import About from "./About";
import Work from "./Work";

function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Work />
    </main>
  );
}

export default Main;
