import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { proxy } from "../../config";

import { getbyuser, gethomeids, adminquery } from "../../api/unit";
import AdminCard from "../../Components/Dashboard/AdminCard";
import SearchBar from "../../Components/Dashboard/SearchBar";
import UnitCardAll from "../../Components/AllUnits/UnitCardAll";

export default function UnitsbyUser() {
  const [units, setUnits] = useState([]);
  const { id } = useParams();
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
  };
  useEffect(() => {
    getbyuser(id).then((result) => setUnits(result.data.response));
  }, []);

  const [ids, setids] = useState([]);
  const updateids = async () => {
    gethomeids().then((result) => setids(result.data.response));
  };
  return units.length > 0 ? (
    <div className="p-3">
      <div className="w-75 m-auto">
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          onSearch={onSearchPress}
        />
      </div>
      <h3>User Units</h3>
      <div className="row my-4">
        {units.map((item, index) => (
          <div key={item._id} className="col-lg-4 col-md-6 col-sm-12 my-2 ">
            <AdminCard
              id={item._id}
              destination={`/details/${item._id}`}
              adname={item.adname}
              size={item.size}
              price={item?.price?.value}
              imagee={proxy + "/" + item.images[0]}
              description={item.description}
              home={ids}
              updateids={updateids}
              unitCode={item.unitCode}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h3>this user has no units</h3>
  );
}
