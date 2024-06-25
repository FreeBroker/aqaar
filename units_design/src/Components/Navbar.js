import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Logo from "./images/logo.png";
import DropDownIcon from "./DropDownIcon";
import LangIcon from './images/languageIcon.svg';
import './navbar.css';
import 'flag-icon-css/css/flag-icons.min.css';


const languages = [
  {
    code: 'ar',
    name: 'العربيه',
    country_code: 'eg',
    dir: 'rtl',
  },
  {
    code: 'en',
    name: 'english',
    country_code: 'us',
    dir: 'ltr',
  },
];

export default function Navbar({ toggleModeLogin, toggleModelSignup }) {
  const [showSearchField, setShowSearchField] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [showLangList, setShowLangList] = useState(false);
  const [dir, setDir] = useState('rtl');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const query = window.location.pathname.split("/")[1];


  useEffect(() => {
    if (!query) {
      setActiveTab(1);
    } else if (query === "jobs") {
      setActiveTab(5);
    }
  }, [query]);

  const toggleSearchField = () => {
    setShowSearchField(!showSearchField);
  };

  const handleLangList = (value, dir) => {
    document.body.dir = dir;
    setDir(dir);
    i18next.changeLanguage(value);
    setShowLangList(false);

  };

  return (
    <div className="" >
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#161616" }}>
        <div className="mx-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-"  />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon" style={{ color: "#fff" }} >▼</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className={`nav-item ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
              <Link 
                className={`nav-link text- ${activeTab === 1 ? "font-weight-bold" : ""}`}
                to="/"
              >
                {t('home')}
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>
              <Link
                
                className={`nav-link text- ${activeTab === 3 ? "font-weight-bold" : ""}`}
                to="https://2dealcrm.com"
              >
                {t('crm_system')}
              </Link>
            </li>
            <li className={`nav-item text- ${activeTab === 5 ? "active" : ""}`} onClick={() => setActiveTab(5)}>
              <Link
                className={`nav-link ${activeTab === 5 ? "font-weight-bold" : ""}`}
                to="/jobs"
              >
                {t('jobs_hiring')}
              </Link>
            </li>
          </ul>
          <div className="mx-2">
            <i className="fas fa-search" style={{ color: "#fff" }} onClick={toggleSearchField}></i>
          </div>
          {showSearchField && (
            <div className="mx-2">
              <form onSubmit={(e) => {
                e.preventDefault();
                if (searchValue !== "") {
                  navigate(`/search/${searchValue}`);
                }
              }}>
                <input
                  style={{ direction: dir }}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder={dir === 'ltr' ? "Search..." : "...بحث"}
                />
              </form>
            </div>
          )}
          <div className="mx-2 nav-lang">
            <img src={LangIcon} alt="" width={28} onClick={() => setShowLangList(!showLangList)} />
            {showLangList &&
              <ul className={`list-lang ${dir === 'rtl' ? 'dir-right' : 'dir-left'}`}>
                {languages.map(({ code, name, country_code, dir }) => (
                  <li
                    className='d-flex align-items-center'
                    key={country_code}
                    onClick={() => handleLangList(code, dir)}
                  >
                    <span className={`flag-icon flag-icon-${country_code}`}></span>
                    <span className='mx-2'>{name}</span>
                  </li>
                ))}
              </ul>
            }
          </div>
          {activeTab === 5 ? (
            <>
              {cookies.get("jobsUser") ? (
                <button
                  type="button"
                  className="mx-2 btn btn-outline-danger"
                  onClick={() => {
                    cookies.remove("jobsAuth", { path: "/" });
                    cookies.remove("jobsUser", { path: "/" });
                    navigate("/jobs", { replace: true });
                  }}
                >
                  {t('logout')}
                </button>
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <>
              {cookies.get("user") ? (
                <>
                  <DropDownIcon />
                  <Link to="/postAd">
                    <button
                      type="button"
                      className="mx-2 btn btn-outline-danger"
                      style={{ color: "#ffff", borderColor: "#FA8615" }}
                    >
                      Posting an ad
                    </button>
                  </Link>
                </>
              ) : activeTab === 3 ? (
                <></>
              ) : (
                <div>
                  <div className="my-2">
                    <button
                      type="button"
                      className=" mx-1 text-dark btn btn-light"
                      onClick={toggleModeLogin}
                    >
                      {t('login')}
                    </button>
                    <button
                      type="button"
                      className="mx-1 btn"
                      style={{
                        color: "#fff",
                        backgroundColor: "#0000",
                        borderColor: "#ffff",
                      }}
                      onClick={toggleModelSignup}
                    >
                      {t('sign_up')}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
