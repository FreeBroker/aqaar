import React from "react";
import Phone from "./Phone";
import Whatsapp from "./whatsapp";
import SendMessageBtn from "./SendMessageBtn";
import PrivatePerson from "./PrivatePerson";
import SaveAdBtn from "./SaveAdBtn";
import { useTranslation } from "react-i18next";

export default function SellerDetails({ id, user_id, phone,whatsapp, name, update_favorites, favorites }) {
  const { t } = useTranslation();

  return (
    <div className="m-4">
      <h5 className="fw-bold mb-4" style={{textAlign:'start'}}>{t('contact_advertiser')}</h5>
      <Phone phone={phone} />
      
      <SendMessageBtn unit_id={id} user_id={user_id} />
      <PrivatePerson name={name} />
      <SaveAdBtn id={id} update_favorites={update_favorites} favorites={favorites} />
      <Whatsapp whatsapp={whatsapp}/>
    </div>
  );
}