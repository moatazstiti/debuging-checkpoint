import React, { useState } from "react";
import Counter from "./Counter";
import User from "./User";

function App() {
  const [showUser, setShowUser] = useState(true);

  return (
    <div>
      <h1>Debugging React Application</h1>
      <Counter />
      
      {showUser && <User name="Yazen Abouchendi" />}
      <button onClick={() => setShowUser(!showUser)}>
        Toggle User Component
      </button>
    </div>
  );
}

export default App;
