import React from "react";
import { GuestRoomPicker } from "@components";

import "./index.css";

const PEOPLE = 3;
const ROOMS = [
  { min: 0, max: 2 },
  { min: 0, max: 1 },
];

function App() {
  const handleDistribution = (distribution) => {
    console.log(distribution);
  };

  return (
    <div styleName="container">
      <GuestRoomPicker
        people={PEOPLE}
        rooms={ROOMS}
        handleDistribution={handleDistribution}
      />
    </div>
  );
}

export default App;
