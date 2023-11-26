import React from "react";

import Card from "../components/Card"

function Home() {

  return (
    <div className="grid grid-cols-3 p-20 gap-y-16 justify-items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
