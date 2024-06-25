import React from "react";
import BuyOrSellUnits from "./Home/BuyOrSellUnits";
import BuySearch from "./Home/BuySearch";
import UnitsCards from "./AllUnits/UnitsCards";

export default function ShowUnits({ title, units,showfav, update_favorites, favorites, myUnits}) {
  return (
    <div className="w-75 m-auto my-4">
      {!showfav&&<div className="tabContainer my-5">
        <BuyOrSellUnits
          config={[
            { header: "Buy", content: <BuySearch type={"Sell"}/> },
            { header: "Rent", content: <BuySearch type={"Rent"}/> },
          ]}
        />
      </div>}
      <div>
        <h1 className="text-center text-white">{title}</h1>
        <div className="row"></div>
        <UnitsCards units={units} update_favorites={update_favorites} favorites={favorites} myUnits={myUnits||false}/>
      </div>
    </div>
  );
}
