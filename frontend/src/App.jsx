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
import MemoryMatchGame from "./pages/Games/MemoryMatchGame";
import TicTacToe from "./pages/Games/TicTacToe";
import SudukoGame from "./pages/Games/SudukoGame";
import Footer from "./pages/Home/Footer";
import Settings from "./pages/Home/Settings";
import HelpandSupport from "./pages/Home/HelpandSupport";
import Ai from "./pages/Ai/Ai";
import Topics from "./pages/Ai/Topics";
import Communication from "./pages/Communication/Communication";


const AppContent = () => {
  const location = useLocation()
  const hideNavbarRoutes = ["/login", "/signup","/footer"]
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
         <Route path="/memory-match" element={<MemoryMatchGame />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
         <Route path="/suduko" element={<SudukoGame />} />
          <Route path="/settings" element={<Settings />} />
           <Route path="/help" element={<HelpandSupport />} />
           <Route path="/ai" element={<Ai />} />
           <Route path="/topics" element={<Topics />} />
            <Route path="/communication" element={<Communication />} />
      </Routes>
       {!shouldHideNavbar &&<Footer/>}
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
