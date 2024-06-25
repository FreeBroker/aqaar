import React from "react";

import PendingCard from "../../Components/Dashboard/PendingCard";
import { getPending  } from "../../api/unit";
import { useEffect } from "react";
import { useState } from "react";
import { proxy } from "../../config";

export default function PendingUnits() {
  const [units, setUnits] = useState([]);

  const init=()=>{
    getPending().then((result) => setUnits(result.data.response));
  }
  useEffect(() => {
    init()
  }, []);
/* 
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearchPress = () => {
    if (searchValue.length > 4) {
      adminquery(searchValue).then((result) => {
        console.log(result.data);
        setUnits(result.data.response);
      });
    }
  }; */

  return (
    <div className="p-3">
      <div className="w-75 m-auto">
      </div>
      <div className="row my-4">
        {units.map((item, index) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 my-2 ">
            <PendingCard
              init={init}
              id={item._id}
              destination={`/details/${item._id}`}
              adname={item.adname}
              size={item.size}
              price={item?.price?.value}
              imagee={proxy + "/" + item.images[0]}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
