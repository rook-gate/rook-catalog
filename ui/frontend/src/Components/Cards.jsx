import React from "react";
import data from "../assets/mockData.json";
import { CAT_COLORS, DEFAULT_COLOR } from "../stores/catColor";
import { useState } from "react";


export default function Cards({ app }) {
  const domain = app?.homepage ? new URL(app.homepage).hostname : null;
  const iconUrl = domain ? `https://icon.horse/icon/${domain}` : null;
  const [hover, setHover] = useState(false);
  const color = CAT_COLORS[app.category] || DEFAULT_COLOR;

  return (
    <div
      className="bg-white rounded-2xl p-4 w-56 h-48 flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer"
      style={{ borderTop: `3px solid ${color.bg}` }}
    >
      {/* TOP ROW: icon + name */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#f4f4f5] flex items-center justify-center overflow-hidden shrink-0">
          {iconUrl ? (
            <img
              className="w-8 h-8 object-contain"
              alt={app.name}
              src={iconUrl}
            />
          ) : null}
        </div>

        {/* Name */}
        <div className="flex flex-col min-w-0">
          <p className="text-[#18181b] text-sm font-semibold leading-tight truncate">
            {app?.name}
          </p>
          <p className="text-xs text-gray-400 truncate">
            by {app.publisher}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#a1a1aa] text-xs line-clamp-3">
        {app?.description}
      </p>

      {/* Button */}
      <button
        onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        className="mt-auto  text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150"
        style={{
          background: hover ? color.accent : color.bg,
          color: hover ? "#fff" : color.accent,
          border: `1px solid ${color.accent}33`,
        }}
      >
        Install
      </button>
    </div>
  );
}
