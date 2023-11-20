import React from "react";

import Card from "../components/Card"

function Home() {

  return (
    <div className="grid grid-cols-3 p-20 gap-y-12">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
