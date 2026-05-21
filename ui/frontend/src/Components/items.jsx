import React from "react";
import Cards from "./Cards";
import data from "../assets/mockData.json";

function Items() {
  console.log(data.apps)
  return (
    <div className='select-none p-6 flex flex-wrap gap-4'>
      {data?.apps?.map((app) => (
        <div
          key={app.id}
          className="">
          <Cards  app={app} />
        </div>
      ))}
    </div>
  );
}

export default Items;
