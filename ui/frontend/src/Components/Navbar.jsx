import React from "react";
import {
  WindowMinimise,
  WindowToggleMaximise,
  Quit,
} from "../../wailsjs/runtime/runtime";

function Navbar() {
  return (
    <div
      className="flex items-center justify-between px-4 h-16 bg-[#fafafa] border-b border-zinc-200/80  select-none "
      style={{ "--wails-draggable": "drag" }}
    >
      <div
        style={{ "--wails-draggable": "no-drag" }}
        className="flex items-center"
      >
        <div className="relative">
          <h1 className="text-[15px] font-semibold tracking-tight text-[#18181b] flex items-center gap-2">
            Rook
            <span className="text-[11px] font-medium text-[#71717a] bg-[#f0f0f0] border border-[#e4e4e7] px-2 py-0.5 rounded-md tracking-wide">
              CATALOG
            </span>
          </h1>
        </div>
      </div>

      <div
        className="flex items-center gap-2"
        style={{ "--wails-draggable": "no-drag" }}
      >
        <button
          onClick={WindowMinimise}
          className="w-8 h-8 flex items-center justify-center  hover:text-white hover:bg-gray-800 rounded transition"
        >
          ─
        </button>

        <button
          onClick={WindowToggleMaximise}
          className="w-8 h-8 flex items-center justify-center  hover:text-white hover:bg-gray-800 rounded transition"
        >
          □
        </button>

        <button
          onClick={Quit}
          className="w-8 h-8 flex items-center justify-center hover:bg-red-500 rounded transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Navbar;
