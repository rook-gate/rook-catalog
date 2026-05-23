import React from "react";
import { useCatalogStore } from "../stores/useCatalogStore";
import data from "../assets/mockData.json";

export default function Hero() {
  const setActiveCategory = useCatalogStore((s) => s.setActiveCategory);

  return (
    <div
      className="rounded-2xl p-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)" }}
    >
      {/* decorative glows */}
      <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }} />

      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
        Rook Catalog
      </p>
      <h1 className="text-3xl font-bold text-zinc-800 leading-tight">
        Build. Install.<br />
        <span className="text-zinc-400">Ship faster.</span>
      </h1>
      <p className="text-sm text-zinc-400 mt-3 max-w-xs">
        Every tool your machine needs, one click away.
      </p>

      <div className="flex gap-2 mt-6 flex-wrap">
        {data.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-3 py-1 text-xs rounded-full text-zinc-500 border border-zinc-300 hover:border-zinc-400 hover:text-zinc-700 transition-all duration-150 bg-white/50"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}