import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getprofileapi, deleteAccount, updateAccount } from "../api/user";
import { useTranslation } from "react-i18next";
import { Cookies } from "react-cookie";

export default function Profile() {
  const cookie = new Cookies();
  const navgate = useNavigate();
  const { t } = useTranslation();
  const [data, setdata] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  
  useEffect(() => {
    getprofileapi().then((e) => {
      setdata(e.response);
      setEmail(e.response.email);
      setName(e.response.name);
      setGender(e.response.gender)

      // Set initial values for date of birth dropdowns
      if (e.response.dateOfBirth) {
        const dob = new Date(e.response.dateOfBirth);
        setSelectedYear(dob.getFullYear().toString());
        setSelectedMonth((dob.getMonth() + 1).toString());
        setSelectedDay(dob.getDate().toString());
      }
    });
  }, []);
  var days = [];
  var months = [];
  var years = [];
  (function () {
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
  })();
  (function () {
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
  })();
  (function () {
    for (let i = 1950; i <= 2023; i++) {
      years.push(i);
    }
  })();
  const handledelete = () => {
    deleteAccount().then((result) => {
      if (result.data.message === "User deleted successfully") {
        cookie.remove("user");
        navgate("/");
      }
    });
  };
  const handleUpdate = () => {
    const year = selectedYear;
    const month = selectedMonth;
    const day = selectedDay;

    const selectedDate = new Date(year, month - 1, day);
    const updatedProfile = {
      name: name || data.name,
      email: email || data.email,
      dateOfBirth: selectedDate || data.dateOfBirth,
      gender:gender||data.gender
    };

    updateAccount(updatedProfile).then((result) => {
      window.location.reload();
    });
  };
  return (
    <div className="profileWidth">
      <div className="border rounded m-3 p-3 bg-light">
        <h5 className="font-weight-bold w-100" style={{ textAlign: "start" }}>
          {t("edit_profile")}
        </h5>
        <hr />
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label
                className="font-weight-bold w-100 "
                style={{ textAlign: "start" }}
                for="name"
              >
                {t("name")}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control border border-dark"
                id="name"
                aria-describedby="emailHelp"
                placeholder={t("name")}
              />
            </div>

            <div className="form-group ">
              <label
                className="font-weight-bold w-100"
                style={{ textAlign: "start" }}
              >
                {t("date_of_birth")}
              </label>
              <div className="d-flex flex-row">
              <div className="col-4">
                <select
                  className="form-select form-control form-select-lg mb-3 border border-dark"
                  aria-label=".form-select-lg example"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  <option selected disabled>
                    {t("day")}
                  </option>
                  {days.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4">
                <select
                  className="form-select form-control form-select-lg mb-3 border border-dark"
                  aria-label=".form-select-lg example"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option selected disabled>
                    {t("month")}
                  </option>
                  {months.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4">
                <select
                  className="form-select form-control form-select-lg mb-3 border border-dark"
                  aria-label=".form-select-lg example"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option selected disabled>
                    {t("year")}
                  </option>
                  {years.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
</div>
              <div className="form-group">
                <label
                  className="font-weight-bold w-100"
                  style={{ textAlign: "start" }}
                  for="name"
                >
                  {t("gender")}
                </label>
                <div className="row mx-2">
                  <div
                    class="form-check col-6 col-md-12 px-0 "
                    style={{ textAlign: "start" }}
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={gender === "Male"} // Set checked based on gender state
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label class="form-check-label mx-3" for="male">
                      {t("male")}
                    </label>
                  </div>
                  <div
                    class="form-check col-6 px-0 mt-2"
                    style={{ textAlign: "start" }}
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={gender === "Female"} // Set checked based on gender state
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label class="form-check-label mx-3 " for="female">
                      {t("female")}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h6
              className="font-weight-bold w-100"
              style={{ textAlign: "start" }}
            >
              {t("contact_information")}
            </h6>
            <div className="form-group">
              <label
                className="font-weight-bold w-100"
                style={{ textAlign: "start" }}
                for="phone"
              >
                {t("phone_number")}
              </label>
              <input
                type="number"
                className="form-control border border-dark"
                id="phone"
                aria-describedby="emailHelp"
                placeholder={t("phone_number")}
                value={data?.phone}
              />
              <small
                id="emailHelp"
                class="form-text text-muted w-100"
                style={{ textAlign: "start" }}
              >
                {t("mob_not")}
              </small>
            </div>

            <div className="form-group">
              <label
                className="font-weight-bold w-100"
                style={{ textAlign: "start" }}
                for="email"
              >
                {t("email")}
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control border border-dark"
                id="email"
                aria-describedby="emailHelp"
                placeholder={t("email")}
              />
              <small
                id="emailHelp"
                className="form-text text-muted w-100"
                style={{ textAlign: "start" }}
              >
                {t("spam")}
              </small>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <Link className="text-dark">
            <u>Discard</u>
          </Link>
          <button
            type="button"
            className="mx-1 btn "
            onClick={handleUpdate}
            style={{
              color: "#fff",
              backgroundColor: "#B79763",
              borderColor: "#B79763",
            }}
          >
            {t("save_changes")}
          </button>
        </div>
      </div>

      <div className="border rounded m-3 p-3 bg-light">
        <h5 className="font-weight-bold w-100" style={{ textAlign: "start" }}>
          {t("delete_this_account")}
        </h5>
        <hr />
        <h5 className="font-weight-bold w-100" style={{ textAlign: "start" }}>
          {t("sure_delete")}
        </h5>
        <div className="d-flex justify-content-end ">
          <button
            type="button"
            className="mx-1 btn"
            onClick={handledelete}
            style={{
              color: "#fff",
              backgroundColor: "#B79763",
              borderColor: "#B79763",
            }}
          >
            {t("delete")}
          </button>
        </div>
      </div>
    </div>
  );
}
