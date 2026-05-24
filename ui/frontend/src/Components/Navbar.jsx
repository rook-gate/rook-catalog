import React from "react";
import {
  WindowMinimise,
  WindowToggleMaximise,
  Quit,
} from "../../wailsjs/runtime/runtime";
import icon from "../assets/appicon.png";
import { useCatalogStore } from "../stores/useCatalogStore";
import data from "../assets/mockData.json";

function Navbar() {
  const activeCategory = useCatalogStore((s) => s.activeCategory);

  return (
    <div
      className="flex items-center justify-between px-4 h-12 bg-[#fafafa] border-b border-zinc-200/80 select-none"
      style={{ "--wails-draggable": "drag" }}
    >
      {/* LEFT — window controls */}
      <div
        className="flex items-center gap-1.5"
        style={{ "--wails-draggable": "no-drag" }}
      >
        <button onClick={Quit}
          className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition" />
        <button onClick={WindowMinimise}
          className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition" />
        <button onClick={WindowToggleMaximise}
          className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition" />
      </div>

   
      <div className="flex items-center gap-2">
        <img src={icon} className="w-5 h-5" />
        <h1 className="text-[13px] font-semibold tracking-tight text-[#18181b] flex items-center gap-2">
          Rook
          <span className="text-[10px] font-medium text-[#71717a] bg-[#f0f0f0] border border-[#e4e4e7] px-2 py-0.5 rounded-md tracking-wide">
            CATALOG
          </span>
        </h1>
      </div>
 
    </div>
  );
}

export default Navbar;