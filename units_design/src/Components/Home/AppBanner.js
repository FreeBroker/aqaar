import React from "react";
import "./AppBanner.css";
import Phone from '../images/phone.png'
import GetAppButton from "./GetAppButton";
import { useTranslation } from "react-i18next";

export default function AppBanner() {
  const { t } = useTranslation()
  return (
    <div className="appBanner">
      <div className="row w-75 m-auto align-items-center">
        <div className="d-none d-lg-block col-lg-5 phoneImage">
          <img className="w-50 h-100" src={Phone} alt="phone" />
        </div>

        <div className="col-lg-6 col-md-12 py-2 ">
          <h2 className="fw-bold text-dark d-inline d-flex " style={{ textAlign: 'start' }}>{t('download_app')}</h2>
          <h6 className="fw-bold text-dark mt-5" style={{ textAlign: 'start' }}>{t('looking_for_rent')}</h6>
          <p className="text-dark mb-5" style={{ textAlign: 'start' }}>{t('carry')}</p>

          <div className="d-flex justify-content-center m-2">
            <div className=" mx-md-4 ">
              <GetAppButton
                icon={"fa-brands fa-google-play"}
                smallTitle={"Get it On"}
                bigTitle={"Google Play"}
                color={"#63defd"}
              />
            </div>

            <div className=" mx-md-4 ">
              <GetAppButton
                icon={"fa-brands fa-apple"}
                smallTitle={"Download on the"}
                bigTitle={"App Store"}
                color={"#FFFFFF"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
