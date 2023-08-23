import { useState } from "react";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";

function App() {
 
  return (
    <div className="App">
      <Header />
      <DayList></DayList>
      <Day></Day>
    </div>

  );
}

export default App;
