import React, { useRef, useState, useEffect, useCallback } from "react";
import ImageDetails from "../Components/UnitDetails/ImageDetails";
import SellerDetails from "../Components/UnitDetails/SellerDetails";
import UnitCardAll from "../Components/AllUnits/UnitCardAll";
import UnitSale from "../Components/UnitDetails/UnitSale";
import UnitDescription from "../Components/UnitDetails/UnitDescription";
import { useParams } from "react-router-dom";
import { getone, getlatest } from "../api/unit";
import Spinner from "../Components/Spinner";
import { proxy } from "../config";
import { useTranslation } from "react-i18next";

export default function UnitDetails(props) {
  const { t } = useTranslation();
  const [recommendedUnits, setRecommendedUnits] = useState([]);
  const [unit, setUnit] = useState();
  const [name, setName] = useState("");
  
  const params = useParams();
  
  useEffect(() => {
    getone(params.id).then((result) => {
      setUnit(result.data.response);
      setName(result.data.name);
      window.scrollTo(0, 0);
    });
    getlatest().then((result) => {
      setRecommendedUnits(result.data.response);
    });
  }, [params.id]);

  if (!unit || !recommendedUnits.length) return <Spinner />;

  return (
    <div className="pageWidth">
      <div className="row mt-3">
        <div className="col-lg-8 col-md-12 mb-2">
          <ImageDetails
            adname={unit.adname}
            price={unit?.price?.value}
            size={unit.size}
            images={unit.images}
            unitCode={unit.unitCode}
          />
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="detailsContainer">
            <SellerDetails
              id={unit._id}
              user_id={unit.user_id}
              phone={unit.phone}
              whatsapp={unit.whatsapp}
              name={name}
              update_favorites={props.update_favorites}
              favorites={props.favorites}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-md-12">
          <UnitSale
            Area={unit.size + " ㎡"}
            Rooms={unit.rooms}
            Bathrooms={unit.bathrooms}
            Furnished={unit.furnished ? "Yes" : "No"}
            Price={
              unit?.price?.value?.toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " E.G.P" || ""
            }
            location={"Cairo"}
            Floor_level={unit.floor_level}
            MoveInDate={unit.moveInDate}
            Payment={unit.payment}
            DownPayment={unit.upfront}
            TypeofHouse={unit.type2}
            finished={unit?.finished}
            Owner={unit.owner ? "Yes" : "No"}
            unitCode={unit?.unitCode}
          />
          <UnitDescription description={unit.description} />
        </div>
      </div>

      <div className="row detailsContainer m-1 mb-4">
        <div className="m-2">
          <h5 className="text-dark fw-bold my-3 mx-4" style={{ textAlign: 'start' }}>{t('recommendation')}</h5>

          <div className="row mx-0 mx-lg-2">
            {recommendedUnits.map((item, index) => (
              <div className="col-lg-4 col-md-4 col-sm-12 my-2" key={item._id}>
                <UnitCardAll
                  destination={`/details/${item._id}`}
                  adname={item?.title}
                  size={item?.size}
                  price={item?.price?.value}
                  imagee={proxy + "/" + item.images[0]}
                  description={item?.description}
                  unitCode={item?.unitCode}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
