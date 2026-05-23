import React from "react";
import data from "../assets/mockData.json";
import {
  BriefcaseBusiness,
  Code,
  Gamepad2,
  Globe,
  House,
  MessageCircle,
} from "lucide-react";
import { useCatalogStore } from "../stores/useCatalogStore";
import { CAT_COLORS, DEFAULT_COLOR } from "../stores/catColor";

function Sidebar() {
  const activeCategory = useCatalogStore((s) => s.activeCategory);
  const setActiveCategory = useCatalogStore((s) => s.setActiveCategory);


  const categoryIcons = {
    home: <House size={18} />,
    "developer tools": <Code size={18} />,
    browsers: <Globe size={18} />,
    gaming: <Gamepad2 size={18} />,
    productivity: <BriefcaseBusiness size={18} />,
    communication: <MessageCircle size={18} />,
  };

  const homeItem = { id: "home", label: "Home" };

  const isHome = activeCategory === "home";
  return (
    <>
      <div className="w-56 gap-0.5 px-2 py-3 select-none bg-[#fafafa]  border-r border-zinc-200/80 shadow-[4px_0_12px_rgba(0,0,0,0.25)] font-semibold">
        <div
          onClick={() => setActiveCategory("home")}
          className="cursor-pointer rounded-xl transition-all duration-200"
        >
          <span
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm"
            style={{
              color: isHome ? "#111" : "#52525b",
              backgroundColor: isHome ? "#e4e4e7" : "transparent",
            }}
          >
            <House size={18} />
            Dashboard
          </span>
        </div>

        {data?.categories.map((cat) => {
          const { accent, bg } = CAT_COLORS[cat.id] || DEFAULT_COLOR;
          const isActive = activeCategory === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="cursor-pointer rounded-xl transition-all duration-200"
            >
              <span
                className="flex items-center gap-3 px-3 py-2.5  w-full rounded-xl text-sm "
                style={{
                  color: isActive ? accent : "#52525b",
                  backgroundColor: isActive ? bg : "transparent",
                }}
              >
                {categoryIcons[cat.id]}

                {cat.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
