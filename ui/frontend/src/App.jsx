import { useState } from "react";
import data from "./assets/mockData.json";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { useCatalogStore } from "./stores/useCatalogStore";
import Navbar from "./Components/Navbar";
import { GridPattern } from "./Components/grid-pattern";
import Items from "./Components/items";

function App() {
  const [loadingApp, setLoadingApp] = useState(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#141414]">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 bg-white relative overflow-hidden">
          <GridPattern
            width={32}
            height={32}
            strokeDasharray="0"
            className="stroke-zinc-200/80 absolute inset-0 z-0"
            squares={[
              [2, 2],
              [3, 2],
              [7, 4],
            ]}
          />
          <div className="relative z-10">
            <Items />
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
