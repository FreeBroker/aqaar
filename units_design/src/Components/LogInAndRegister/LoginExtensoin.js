import React from "react";
import { useReducer } from "react";
import { useTranslation } from "react-i18next";

export default function LoginExtensoin({
  login,
  toggleModeLogin,
  toggleModelSignup,
}) {
  const { t } = useTranslation();

  const title1 = login
    ? `${t('do_not_account')}`
    : `${t('worth_register')}`;
  const btnText = login ? `${t('sign_up')} Now!` : `${t('login')}`;
  return (
    <div className="m-5">
      <h4 className="text-light pt-4" style={{ textAlign: 'start' }}>{title1}</h4>
      {login && <h2 className="text-light fw-bold" style={{ textAlign: 'start' }}>{t('sign_up')} !</h2>}

      <ul className="text-light my-5">
        <li className="my-4" style={{ textAlign: 'start' }}>{t('property_one')}</li>
        <li className="my-4" style={{ textAlign: 'start' }}>{t('property_two')}</li>
        <li className="my-4" style={{ textAlign: 'start' }}>{t('property_three')}</li>
        <li className="my-4" style={{ textAlign: 'start' }}>{t('property_four')}</li>
        <li className="my-4" style={{ textAlign: 'start' }}>{t('property_five')}</li>
      </ul>

      <button
        className="btn  fw-bold"
        style={{ backgroundColor: "#B79763", color: "white", textAlign: 'start' }}
        onClick={() => {
          if (login) {
            toggleModeLogin();

            toggleModelSignup();
          } else {
            toggleModelSignup();

            toggleModeLogin();
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
}
