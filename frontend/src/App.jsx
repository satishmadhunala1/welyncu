import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// pages
import HomePage from "./pages/Home/HomePage";
import Jobs from "./pages/Jobs/Jobs";
import Navbar from "./pages/Home/Navbar";
import Profile from "./pages/Profile/Profile";
import Connect from "./pages/Connect/Connect";
import SignUp from "./pages/AuthPage/SignUp";
import LoginPage from "./pages/AuthPage/LoginPage";
import LiveSessions from "./pages/Connect/LiveSessions";
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
import CompanionPage from "./pages/Communication/Communication";
import Interview from "./pages/Interview/Interview";
import InterviewForm from "./pages/Interview/InterviewForm";
import Feedback from "./pages/Interview/Feedback";
import FeedMain from "./pages/Feed/FeedMain";
import Job from "./pages/Jobs/Job";
import Page from "./pages/Page/Page";
import ResumeEntryPage from "./pages/Resume-Builder/ResumeEntryPage";
import ExperienceLevelPage from "./pages/Resume-Builder/ExperienceLevelPage";
import ChooseTemplate from "./pages/Resume-Builder/ChooseTemplate";
import ResumeOptions from "./pages/Resume-Builder/ResumeOptions";
import ResumeBuilder from "./pages/Resume-Builder/ResumeBuilder";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // You can change to "auto" for instant scroll
    });
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/footer"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
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
        <Route path="/interview" element={<Interview />} />
        <Route path="/interviewform" element={<InterviewForm />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/companions/:id" element={<CompanionPage />} />
        <Route path="/feed" element={<FeedMain />} />
        <Route path="/job" element={<Job />} />
        <Route path="/page" element={<Page />} />
        <Route path="/resume" element={<ResumeEntryPage />} />
        <Route path="/experience-page" element={<ExperienceLevelPage />} />
        <Route path="/choose-template" element={<ChooseTemplate />} />
        <Route path="/resume-options" element={<ResumeOptions />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;