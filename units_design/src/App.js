import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import PopUp from "./Components/LogInAndRegister/PopUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUnits from "./Pages/AllUnits";
import FilteredUnits from "./Pages/FilteredUnits";
import UnitDetails from "./Pages/UnitDetails";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./sass/app.scss";
import PostingAd from "./Pages/PostingAd";
import YourUnits from "./Pages/YourUnits";
import MyFavourite from "./Pages/MyFavourite";
import Login from "./jobs/Component/Login/Login";
import HomePage from "./jobs/company_component/HomePage";
import PostformPage from "./jobs/company_component/PostformPage";
import AllJob from "./jobs/freelance/compenents/AllJobs";
import ViewJobPost from "./jobs/company_component/ViewJobPost";
import JobSelected from "./jobs/freelance/compenents/JobSelected";
import JobSaved from "./jobs/freelance/compenents/JobSaved";
import NotFoundPage from "./jobs/NotFound/NorFound";
import ManageUnits from "./Pages/DashboardPages/ManageUnits";
import PendingUnits from "./Pages/DashboardPages/PendingUnits";
import SideBar from "./Components/Dashboard/SideBar";
import ManageUsers from "./Pages/DashboardPages/ManageUsers";
import { useEffect } from "react";
import AdminNavbar from "./Components/Dashboard/AdminNavbr";
import { Cookies } from "react-cookie";
import ChatPage from "./Pages/ChatPage";
import { update } from "./api/personal_cookies";
import Search from "./Pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const cookie = new Cookies();

  useEffect(() => {
    document.title = "AqaarFB";
  }, []);

  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignup, setIsShowSignup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(cookie.get("admin") || false);
  const [favorites, setFavorites] = useState({});

  const ToggleModeLogin = () => {
    setIsShowLogin((prev) => !prev);
  };

  const ToggleModelSignup = () => {
    setIsShowSignup((prev) => !prev);
  };

  useEffect(() => {
    if (isShowLogin || isShowSignup) {
      document.body.classList.add("activePopup");
    } else {
      document.body.classList.remove("activePopup");
    }
  }, [isShowLogin, isShowSignup]);

  const update_favorites = async () => {
    const token = cookie.get("user");
    if (token !== undefined) {
      const p = await update();
      setFavorites(p);
    } else {
      setFavorites({ wish: [] });
    }
  };

  useEffect(() => {
    if (!isAdmin) {
      update_favorites();
    }
  }, [isAdmin]);

  return (
    <BrowserRouter>
      {isAdmin ? (
        <>
          <AdminNavbar setIsAdmin={setIsAdmin} />
          <Routes>
            <Route path="/" element={<ManageUnits />} />
            <Route path="/pending" element={<PendingUnits />} />
            <Route path="/manageUsers" element={<ManageUsers />} />
            <Route path="/details/:id" element={<UnitDetails />} />
            <Route path="/postAd/:id" element={<PostingAd />} />
            <Route path="/postAd" element={<PostingAd />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar
            toggleModeLogin={ToggleModeLogin}
            toggleModelSignup={ToggleModelSignup}
          />
          {isShowLogin && (
            <PopUp
              toggleModeLogin={ToggleModeLogin}
              toggleModelSignup={ToggleModelSignup}
              login={true}
              setIsAdmin={setIsAdmin}
            />
          )}
          {isShowSignup && (
            <PopUp
              toggleModeLogin={ToggleModeLogin}
              toggleModelSignup={ToggleModelSignup}
              login={false}
            />
          )}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  update_favorites={update_favorites}
                  favorites={favorites}
                />
              }
            />
            <Route
              path="/units"
              element={
                <AllUnits
                  update_favorites={update_favorites}
                  favorites={favorites}
                />
              }
            />
            <Route
              path="/details/:id"
              element={
                <UnitDetails
                  update_favorites={update_favorites}
                  favorites={favorites}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/postAd" element={<PostingAd />} />
            <Route path="/yourUnits" element={<YourUnits />} />
            <Route path="/favourite" element={<MyFavourite />} />
            <Route
              path="/query"
              element={
                <FilteredUnits
                  update_favorites={update_favorites}
                  favorites={favorites}
                />
              }
            />
            <Route
              path="/search/:query"
              element={
                <Search
                  update_favorites={update_favorites}
                  favorites={favorites}
                />
              }
            />
            <Route path="/postAd/:id" element={<PostingAd />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/jobs/company" element={<HomePage />} />
            <Route path="/jobs/company/post" element={<PostformPage />} />
            <Route path="/jobs/ViewJobPost/:id" element={<ViewJobPost />} />
            <Route path="/jobs" element={<Login />} />
            <Route path="/jobs/freelancer" element={<AllJob />} />
            <Route path="/jobs/freelancer/jobselected/:id" element={<JobSelected />} />
            <Route path="/jobs/freelancer/jobsaved/:id" element={<JobSaved />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;