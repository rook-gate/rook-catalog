import { WandSparkles } from "lucide-react";
import React from "react";
import data from "../assets/mockData.json";
import Cards from "./Cards";

export default function Picks() {
  const editorPicks = [
    "notion", "brave", "steam", "discord", "zed", 
  ];

  const featuredApps = data.apps.filter((app) =>
    editorPicks.includes(app.id)
  );

  return (
    <div className="space-y-4 ">
      <div className="flex items-center gap-2 mt-2">
        <WandSparkles size={14} className="text-zinc-400" />
        <h1 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Editors' Picks
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
        {featuredApps.map((app) => (
          <Cards key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}