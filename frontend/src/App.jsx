import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

// pages
import HomePage from "./pages/Home/HomePage"
import Jobs from "./pages/Jobs/Jobs"
import Navbar from "./pages/Home/Navbar"
import Profile from "./pages/Profile/Profile"
import Connect from "./pages/Connect/Connect"
import SignUp from "./pages/AuthPage/SignUp"
import LoginPage from "./pages/AuthPage/LoginPage"
import LiveSessions from "./pages/Connect/LiveSessions"
import UserProfile from "./pages/Profile/Dashboard";
import CommunityPage from "./pages/Community/CommunityPage";
import EditProfile from "./pages/Profile/EditProfile";


const AppContent = () => {
  const location = useLocation()
  const hideNavbarRoutes = ["/login", "/signup"]
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/dashboard" element={<UserProfile />} />
         <Route path="/live" element={<LiveSessions />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<CommunityPage />} />
         <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
