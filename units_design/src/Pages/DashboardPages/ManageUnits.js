import React, { useEffect, useState } from "react";
import AdminCard from "../../Components/Dashboard/AdminCard";
import { getall, gethomeids, adminquery } from "../../api/unit";
import { proxy } from "../../config";
import SearchBar from "../../Components/Dashboard/SearchBar";

export default function ManageUnits() {
  const [units, setUnits] = useState([]);
  const [ids, setIds] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    try {
      const unitsResult = await getall();
      setUnits(unitsResult.data.response);
      const idsResult = await gethomeids();
      setIds(idsResult.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchUnits = async () => {
    if (searchValue.length > 4) {
      try {
        const result = await adminquery(searchValue);
        setUnits(result.data.response);
      } catch (error) {
        console.error("Error searching units:", error);
      }
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchUnits();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <div className="p-3">
      <div className="w-75 m-auto">
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          onSearch={searchUnits}
        />
      </div>
      <div className="row my-4">
        {units.map((item) => (
          <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 my-2">
            <AdminCard
              id={item._id}
              destination={`/details/${item._id}`}
              adname={item.adname}
              size={item.size}
              price={item?.price?.value}
              imagee={`${proxy}/${item.images[0]}`}
              description={item.description}
              home={ids}
              updateids={fetchData}
              unitCode={item.unitCode}
              unitDate={item.createdAt}
              phone={item.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
