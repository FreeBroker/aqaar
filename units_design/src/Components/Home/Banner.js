import React from "react";
import "./Banner.css";
import BuyOrSellUnits from "./BuyOrSellUnits";
import BuySearch from "./BuySearch";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation()
  return (
    <div className="p-4 text-center bg-image banner">
      <div className="d-none d-lg-block bannerTextContainer w-25 mx-4 d-flex justify-content-end">
        <h1 className="bannerText" style={{textAlign:'end'}}>{t('welcome_post')}</h1>
      </div>
      <div className="d-none d-lg-block" style={{ height: 240 }}></div>
      <div>
        <div className="tabContainer  mt-md-0">
          <BuyOrSellUnits
            config={[
              { header: "Buy", content: <BuySearch type={"Sell"} /> },
              { header: "Rent", content: <BuySearch type={"Rent"} /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
