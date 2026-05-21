import React from "react";
import Cards from "./Cards";
import data from "../assets/mockData.json";
import { useCatalogStore } from "../stores/useCatalogStore";

function Items() {
  const activeCategory = useCatalogStore((s) => s.activeCategory);

  const filteredApps = data?.apps?.filter((app) => {
    if (activeCategory === "all") return true;
    return app.category === activeCategory;
  });

  console.log("activeCategory:", activeCategory);
  console.log("apps:", data.apps);
  console.log("filtered:", filteredApps);
  return (
    <>
      <div className="px-6 underline pb-2">
        <h1 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          {activeCategory}
        </h1>
      </div>
    <div className="select-none p-6">
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {filteredApps?.map((app) => (
          <div key={app.id} className="flex">
            <Cards app={app} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Items;
