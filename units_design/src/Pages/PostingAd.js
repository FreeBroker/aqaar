import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostAdsrv, getlocations, getone, updateunit } from "../api/unit";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PostingAd() {
  const params = useParams();
  const navigate = useNavigate()
  const [locations, setlocations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    getlocations().then((result) => {
      setlocations(result.data.response);
    });
  }, [])

  useEffect(() => {
    if (params.id) {
      getone(params.id).then((result) => {
        //   setCurUnit(result.data.response);
        // Object.keys(result.data.response).map((key, index) =>
        //   setUnitData({
        //     ...unitData,
        //     [key]: result.data.response[key],
        //   })
        // );
        // for (let i = 0; i < unitData.images.length; i++) {
        //   formData.append("images", unitData.images[i]);
        // }
        // for (let i = 0; i < unitData.additionals.length; i++) {
        //   formData.append("additionals", unitData.additionals[i]);
        // }
        setUnitData({
          ...unitData,
          adname: result.data.response.adname,
          price: result.data.response.price.value,
          phone: result.data.response.phone,
          whatsapp: result.data.response.whatsapp,
          location: result.data.response.location,
          owner: result.data.response.owner,
          type: result.data.response.type,
          type2: result.data.response.type2,
          upfront: result.data.response.upfront,
          size: result.data.response.size,
          rooms: result.data.response.rooms,
          bathrooms: result.data.response.bathrooms,
          furnished: result.data.response.furnished,
          payment: result.data.response.payment,
          moveInDate: result.data.response.moveInDate,
          description: result.data.response.description,
          floor_level: result.data.response.floor_level,
          pricenegotiable: result.data.response.price.negotiable,
          additionals: result.data.response.additionals,
          // images: result.data.response.images.map((item, index) =>
          //   URL.revokeObjectURL(item)
          // ),
        });
      });
    }
  }, [params.id]);

  const rooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];
  const bathrooms = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const selltype = ["Sell", "Rent"];
  const type = ["Primary", "Resale"];
  const type2 = ["Apartment", "Villa", "Commercial", "Land", "Second Homes", "Studio", "Duplex", "Admin", "Clinics"];
  const dateData = ["Ready to move", "Soon", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031"];
  const payment = ["Cash", "Installments", "Cash & Installments"];
  const finished = ["Core & Shall", "Semi finished", "Flexi finished", "Fully finished"]
  const additionals = [
    "Balacony",
    "Private Garden",
    "Security",
    "Parking",
    "Pool",
    "Electric Meter",
    "Water Meter",
    "Natural Gas",
  ];

  const hiddenUploadImage = useRef(null);

  const onUploadClick = () => {
    hiddenUploadImage.current.click();
  };

  const onUploadChange = (e) => {
    if (e.target.files.length > 0) {
      setUnitData({
        ...unitData,
        images: [...unitData.images, ...e.target.files],
      });
    }
  };

  const [unitData, setUnitData] = useState({
    adname: "",
    location: "",
    owner: false,
    selltype: "Sell",
    type: "",
    type2: "",
    upfront: "",
    size: "",
    rooms: "1",
    bathrooms: "1",
    furnished: false,
    payment: "",
    moveInDate: "Instant",
    price: "",
    phone: "",
    whatsapp: "",
    images: [],
    description: "",
    floor_level: "",
    additionals: [],
    pricenegotiable: false,
    finished: "Core & Shall",
    unitCode: "",
  });

  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setUnitData({ ...unitData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/\D/g, '');
    setUnitData({ ...unitData, [name]: sanitizedValue });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUnitData({ ...unitData, [name]: checked });
  };
  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setUnitData((prevData) => ({
      ...prevData,
      [name]: value === 'true' ? true : false,
    }));
  };

  const PostAd = () => {
    setDisabledBtn(true)
    const formData = new FormData();
    formData.append("finished", unitData.finished)
    formData.append("adname", unitData.adname);
    formData.append("unitCode", unitData.unitCode);
    formData.append("location", unitData.location);
    formData.append("owner", unitData.owner);
    formData.append("selltype", unitData.selltype);
    formData.append("type", unitData.type);
    formData.append("type2", unitData.type2);
    formData.append("upfront", unitData.upfront);
    formData.append("size", unitData.size);
    formData.append("rooms", unitData.rooms);
    formData.append("bathrooms", unitData.bathrooms);
    formData.append("furnished", unitData.furnished);
    formData.append("payment", unitData.payment);
    formData.append("moveInDate", unitData.moveInDate);
    formData.append("price", unitData.price);
    formData.append("phone", unitData.phone);
    formData.append("whatsapp", unitData.whatsapp);
    formData.append("description", unitData.description);
    formData.append("floor_level", unitData.floor_level);
    formData.append("pricenegotiable", unitData.pricenegotiable);
    if (!params.id)
      for (let i = 0; i < unitData.images.length; i++) {
        formData.append("images", unitData.images[i]);
      }
    for (let i = 0; i < unitData.additionals.length; i++) {
      formData.append("additionals", unitData.additionals[i]);
    }
    if (!params.id) {
      PostAdsrv(formData)
        .then((res) => {
          if (res.data.success) {
            navigate("/");
          } else {
            setErrorMessage("Something went wrong did you fill all the feilds");
          }
          setDisabledBtn(false);
        })
        .catch((err) => {
          setErrorMessage("server error");
          setDisabledBtn(false);
        });
    } else {
      updateunit(unitData, params.id)
        .then((res) => {
          if (res.data.success) {
            navigate("/"); // Navigate to home page if success
          } else {
            setErrorMessage("Something went wrong did you fill all the feilds");
          }
        })
        .catch((err) => {
          setErrorMessage("server error");
          setDisabledBtn(false);
        });
    }
  };

  return (
    <div className="profileWidth">
      <div className="border rounded m-3 p-3 bg-light">
        <h5 className="font-weight-bold w-100" style={{ textAlign: 'start' }}>{t('posting')}</h5>
        <hr />
        <div className="row">
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="name">
              {t('title')} <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.adname}
              type="text"
              className="form-control border border-dark"
              id="name"
              placeholder={t('ad_name')}
              name="adname"
              onChange={handleTextChange}
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="location">
              {t('location')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              value={unitData?.location}
              type="text"
              className="form-control border border-dark"
              id="location"
              placeholder={t('location')}
              name="location"
              onChange={handleTextChange}
            >
              <option disabled={true} value="">
                {t('choose_location')}
              </option>
              {locations.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="size">
              {t('area')}<span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.size}
              type="number"
              className="form-control border border-dark"
              id="size"
              placeholder={t('size')}
              name="size"
              onChange={handleNumberChange}
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="price">
              {t('price')}<span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.price}
              type="number"
              className="form-control border border-dark"
              id="price"
              placeholder={t('price')}
              name="price"
              onChange={handleNumberChange}
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="upFront">
              {t('down_payment')} <span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData.upfront}
              type="text"
              className="form-control border border-dark"
              id="upFront"
              placeholder={t('upFront')}
              name="upfront"
              onChange={handleTextChange}
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="selltype">
              {t('sell_rent')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              id="selltype"
              placeholder={t('sell_type')}
              name="selltype"
              onChange={handleTextChange}
            >
              <option disabled={true} value="">
                {t('choose_sell_rent')}
              </option>
              {selltype.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="type">
              {t('property_category')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              id="type"
              placeholder={t('type')}
              name="type"
              onChange={handleTextChange}
              value={unitData.type}
            >
              <option disabled={true} value="">
                {t('choose_property_category')}
              </option>
              {type.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="rooms">
              {t('rooms')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="rooms"
              onChange={handleTextChange}
              value={unitData.rooms}
            >
              <option disabled={true} value="">
                {t('choose_rooms')}
              </option>
              {rooms.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="bathrooms">
              {t('bathrooms')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="bathrooms"
              onChange={handleTextChange}
              value={unitData.bathrooms}
            >
              <option disabled={true} value="">
                {t('choose_bathrooms')}
              </option>
              {bathrooms.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="name">
              {t('unit_code')}
            </label>
            <input
              value={unitData?.unitCode}
              type="text"
              className="form-control border border-dark"
              id="unitCode"
              placeholder={t('unit_code')}
              name="unitCode"
              onChange={handleTextChange}
            />
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="bathrooms">
              {t('property_type')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="type2"
              onChange={handleTextChange}
              value={unitData.type2}
            >
              <option disabled={true} value="">
                {t('choose_property_type')}
              </option>
              {type2.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="bathrooms">
              {t('delivery')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="moveInDate"
              onChange={handleTextChange}
            >
              <option disabled={true} value="">
                {t('choose_date')}
              </option>
              {dateData.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="phone">
              {t('phone')}<span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.phone}
              type="text"
              className="form-control border border-dark"
              id="phone"
              placeholder={t('phone')}
              name="phone"
              onChange={handleTextChange}
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="whats">
              {t("what's_app")}<span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.whatsapp}
              type="text"
              className="form-control border border-dark"
              id="whats"
              placeholder={t("what's_app")}
              name="whatsapp"
              onChange={handleTextChange}
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="floorLevel">
              {t('floor_level')}<span style={{ color: "red" }}>*</span>
            </label>
            <input
              value={unitData?.floor_level}
              type="number"
              className="form-control border border-dark"
              id="floorLevel"
              placeholder={t('floor_level')}
              name="floor_level"
              onChange={handleNumberChange}
            />
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="floorLevel">
              {t('paymenty_plans')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="payment"
              onChange={handleTextChange}
              value={unitData.payment}
            >
              <option disabled={true} value="">
                {t('choose_payment')}
              </option>
              {payment.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="floorLevel">
              {t('finish_type')}<span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-select form-control form-select-lg border border-dark"
              aria-label=".form-select-lg example"
              name="finished"
              onChange={handleTextChange}
              value={unitData.finished}
            >
              {finished.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-group form-check col-lg-2 col-md-5 mx-3 my-2" style={{ textAlign: 'start' }}>
            <input
              type="checkbox"
              className="form-check-input"
              id="furnished"
              name="furnished"
              onChange={handleCheckboxChange}
              checked={unitData.furnished ? true : false}
            />
            <label class="form-check-label mx-3 " style={{}} for="furnitured">
              {t('furnitured')}
            </label>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="pricenegotiable"
                name="pricenegotiable"
                onChange={handleCheckboxChange}
                checked={unitData.pricenegotiable ? true : false}
              />
              <label class="form-check-label mx-3 " for="pricenegotiable">
                {t('negotiable')}
              </label>
            </div>
          </div>

          <div className="form-group form-check col-lg-2 col-md-5 mx-3 my-2" style={{ textAlign: 'start' }}>
            <div>
              <input
                type="radio"
                className="form-check-input"
                id="owner"
                name="owner"
                onChange={handleRadioChange}
                value={true}
                checked={unitData.owner === true}
              />
              <label className="form-check-label mx-3" htmlFor="owner">
                {t('owner')}
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="form-check-input"
                id="broker"
                name="owner"
                onChange={handleRadioChange}
                value={false}
                checked={unitData.owner === false}
              />
              <label className="form-check-label mx-3" htmlFor="broker">
                {t('broker')}
              </label>
            </div>
          </div>



          <div className="form-group col-lg-12 col-md-12">
            <label className="font-weight-bold w-100" style={{ textAlign: 'start' }} for="description">
              {t('description')}<span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              value={unitData?.description}
              type="text"
              className="form-control border border-dark"
              id="description"
              placeholder={t('description')}
              rows={5}
              name="description"
              onChange={handleTextChange}
            />
          </div>
        </div>

        {additionals && (
          <div className="row border rounded p-3 my-2 mx-4">
            {additionals.map((item, index) => (
              <div
                key={index}
                className={`col-lg-2 col-md-6 col-sm-12 rounded border py-2 m-2 mouseHover ${unitData.additionals.includes(item) ? "bg-danger" : "bg-light"
                  }`}
                onClick={() => {
                  if (unitData.additionals.includes(item)) {
                    const updatedAdditionals = unitData.additionals.filter(
                      (existingItem) => existingItem !== item
                    );
                    setUnitData({
                      ...unitData,
                      additionals: updatedAdditionals,
                    });
                  } else {
                    setUnitData({
                      ...unitData,
                      additionals: [...unitData.additionals, item],
                    });
                  }
                  console.log(unitData.additionals);
                }}
              >
                <h6
                  className={`text-center ${unitData.additionals.includes(item)
                    ? "text-light"
                    : "text-dark"
                    }`}
                >
                  {item}
                </h6>
              </div>
            ))}
          </div>
        )}
        {params.id ? (
          <div></div>
        ) : (
          <div className="border rounded p-3 ">
            <div className="d-flex justify-content-center align-items-center m-2">
              <button className="btn " onClick={onUploadClick} style={{
                color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763"
              }}>
                {t('upload_image')}
              </button>
              <input
                type="file"
                multiple
                accept="image/*"
                className="d-none"
                ref={hiddenUploadImage}
                onChange={onUploadChange}
              />
            </div>

            {unitData.images.length > 0 && (
              <div className="row m-auto border rounded">
                {unitData.images.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-2 col-md-6 col-sm-12 p-2 m-2 border"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={URL.createObjectURL(item)}
                      className="w-100 rounded"
                      alt="Ad"
                      style={{ height: "85%" }}
                    />
                    <div className="d-flex justify-content-center align-items-center my-1">
                      <button
                        className="btn"
                        style={{
                          color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763"
                        }}
                        onClick={() => {
                          setUnitData({
                            ...unitData,
                            images: unitData.images.filter(
                              (image) => image !== item
                            ),
                          });

                          hiddenUploadImage.current.value = "";
                        }}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="d-flex justify-content-center align-items-center my-2">
          <button
            onClick={() => {
              PostAd();
            }}
            className="btn  align-self-center"
            style={{
              color: "#fff", backgroundColor: "#B79763", borderColor: "#B79763"
            }}
            disabled={disabledBtn}
          >
            {params.id ? `${t('edit')}` : `${t('post_now')}`}
          </button>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

//http://localhost:5000/unit/create_ad
