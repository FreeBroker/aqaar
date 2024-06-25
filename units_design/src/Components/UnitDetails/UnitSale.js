import React from "react";
import { useTranslation } from "react-i18next";

export default function UnitSale(props) {
  const { t } = useTranslation();
  const formate = (key) => {
    if (key === "floor_level") return "Floor Level";
    else if (key === "MoveInDate") return "Move In Date";
    else if (key === "unitCode") return "Unit Code";
    else if (key === "finished") return "Finish type";
    return key;
  };
  return (
    <div className="detailsContainer my-3">
      <div className="m-4">
        <h4 className="text-dark fw-bold">{t('unit_details')}

        </h4>

        <div className="row">
          {Object.keys(props).map((key, index) => (
            props[key]!==""&&props[key]?
            <div key={index} className="col-lg-6 col-md-12">
              <div className="list-group-item py-3 m-1">
                <div className="row">
                  <h6 className="col-5" style={{textAlign:'start'}}>{formate(key)}: </h6>
                  <h6 className="col-7" style={{textAlign:'start'}}>{props[key]}</h6>
                </div>
              </div>
            </div>:<></>
          ))}
        </div>
      </div>
    </div>
  );
}
