import React from "react";
import data from "../assets/mockData.json";
import {
  BriefcaseBusiness,
  Code,
  Gamepad2,
  Globe,
  MessageCircle,
} from "lucide-react";

function Sidebar({ activeCategory, setActiveCategory }) {
  console.log("DATA:", data);
  console.log("CATEGORIES:", data?.categories);
  console.log("Active Category:", activeCategory);

  const categoryIcons = {
    "developer-tools": <Code size={18} />,
    browsers: <Globe size={18} />,
    gaming: <Gamepad2 size={18} />,
    productivity: <BriefcaseBusiness size={18} />,
    communication: <MessageCircle size={18} />,
  };
  const CAT_COLORS = {
    "developer-tools": { accent: "#2563eb", bg: "#cfe0ff", },
    browsers: { accent: "#d97706", bg: "#ffd9bd"},
    gaming: { accent: "#0e7490", bg: "#c9f2ff"},
    productivity: {accent: "#15803d",bg: "#c8f7d8",},
    communication: { accent: "#6d28d9", bg: "#e4d5ff"},
  };
  
  const DEFAULT_COLOR = { accent: "#888", bg: "#1a1a1a" };

  return (
    <>
      <div className="w-56 gap-0.5 px-2 py-3 select-none  bg-gray-100 border-r-0 border-zinc-800 shadow-[4px_0_12px_rgba(0,0,0,0.25)]">
        {data?.categories.map((cat) => {
          const { accent, bg } = CAT_COLORS[activeCategory] || DEFAULT_COLOR;
          const isActive = activeCategory === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="cursor-pointer rounded-xl transition-all duration-200"
            >
              <span
                className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm "
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
