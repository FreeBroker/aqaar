import React from "react";
import TitleAndLink from "./TitleAndLink";
import UnitCard from "./UnitCard";
import { useEffect } from "react";
import { useState } from "react";
import { gethome } from "../../api/unit";
import Spinner from "../Spinner";
import { proxy } from '../../config'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function UnitsInHome(props) {
  const [units, setUnits] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    gethome().then((result) => setUnits(result.data.response));
  }, []);

  if (!units) return <Spinner />;
  return (
    <div className="my-4">
      <div className="d-none d-md-block ">
        <div className="d-flex justify-content-between align-items-lg-center m-3">
          <h3 className=" fw-bold text-white move- ">{t('move_to_place')}</h3>
          <p className="m-0">
            <Link
              to={'/units'}
              style={{ color: "#fff" }}
              className=" move- link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {t('see_all')}
            </Link>
          </p>
        </div>
      </div>
      <div className="row w-100 mt-5 mt-md-0 pt-4 pt-md-0">
        {units
          .filter((item, index) => index < 8)
          .map((item, index) => (
            <div className="col-lg-6 col-sm-12">
              <UnitCard
                key={item._id}
                id={item._id}
                destination={`/details/${item._id}`}
                image={proxy + '/' + item.images[0]}
                title={item.adname}
                description={item.description}
                price={item.price.value}
                size={item.size}
                update_favorites={props.update_favorites} favorites={props.favorites}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
