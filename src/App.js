import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { Analytics } from "@vercel/analytics/react"; // ✅ Import here

function App() {
  return (
    <div>
      <Main />
      <Analytics /> {/* ✅ Add this line just below Main */}
    </div>
  );
}

export default App;
