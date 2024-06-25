import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import ShowUnits from "../Components/ShowUnits";
import { getall } from "../api/wishlist";
import { useTranslation } from "react-i18next";

export default function MyFavourite() {
  const { t } = useTranslation();
  const [units, setUnits] = useState([]);
  useEffect(() => {
    // // /// //// ///// getall().then((result) => setUnits(result.data.response));

    getall().then((result) => {
      setUnits(result.data.response);
    });
  }, []);
  if (units.length === 0) return <h1 style={{textAlign:'start'}}>{t('wish_empty')}</h1>;
  return <ShowUnits title={"My Favourite"} fav={false} units={units} />;
}
