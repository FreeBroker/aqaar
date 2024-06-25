import React from "react";
import { useTranslation } from "react-i18next";

export default function UnitDescription({ description }) {
  const { t } = useTranslation();
  return (
    <div className="detailsContainer my-3">
      <div className="m-4">
        <h4 className="text-dark fw-bold my-3 text-center">{t('description')}

        </h4>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
