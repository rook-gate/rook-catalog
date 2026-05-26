import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { useCatalogStore } from "./stores/useCatalogStore";
import Navbar from "./Components/Navbar";
import { GridPattern } from "./Components/grid-pattern";
import Items from "./Components/items";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";

function App() {
  const activeCategory = useCatalogStore((s) => s.activeCategory);
  const isHome = activeCategory === "home";

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#141414]">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"

      />
      <Navbar />
      <div className="flex flex-1 overflow-hidden overflow-y-auto no-scrollbar ">
        <Sidebar />
        <div className="flex-1 bg-white no-scrollbar overflow-y-auto">
          <div className="relative min-h-full p-8">
            <GridPattern
              width={32}
              height={32}
              strokeDasharray="0"
              className="stroke-zinc-200/80"
              squares={[
                [2, 2],
                [3, 2],
                [7, 4],
              ]}
            />
            <div className="relative z-10">{isHome ? <Home /> : <Items />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
