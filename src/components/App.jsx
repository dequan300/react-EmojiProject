import React from "react";
import Emoji from "./emoji";
import Emojipedia from "../emojipedia";

function emoteInfo(yo) {
  return (
    <Emoji key={yo.id} emoji={yo.emoji} name={yo.name} meaning={yo.meaning} />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(emoteInfo)}
    </div>
  );
}

export default App;
