import React from "react";
import data from "../assets/mockData.json"
import * as simpleIcons from "simple-icons";

export default function Cards({app}) {
  const domain = app?.homepage ? new URL(app.homepage).hostname : null
  const iconUrl = domain ?  `https://icon.horse/icon/${domain}` : null
  console.log("domain:", domain)
  
  return (
    <>
      <div className="bg-white rounded-2xl p-4 w-48 flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer">

        {/* Icon */}
        <div className="w-10">
          {iconUrl ? (
            <img src={iconUrl} /> ) : null
            }
        </div>
        {/* App details*/}
      </div>
    </>
  );
}
