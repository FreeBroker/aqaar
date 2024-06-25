import React from "react";
import ShowUnits from "../Components/ShowUnits";
import { useEffect } from "react";
import { getmy } from "../api/unit";
import { useState } from "react";

export default function YourUnits() {
  const [units, setUnits] = useState([]);
  useEffect(() => {
    getmy().then((result) => {
      setUnits(result.data.response);
      console.log(result.data.response);
    });
  }, []);
  return <ShowUnits fav={false} units={units} myUnits={true} />;
}
