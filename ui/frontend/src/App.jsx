import { useState } from "react";
import data from "./assets/mockData.json"; 
import "./App.css";
import Sidebar from "./Componnets/Sidebar";

function App() {
  const [activeCategory, setActiveCategory] = useState("developer-tools");
  const [loadingApp, setLoadingApp] = useState(null);

  return (
    <div className="min-h-screen bg-white flex">
      
      {/* Sidebar */}
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

     
    </div>
  );
}

export default App;