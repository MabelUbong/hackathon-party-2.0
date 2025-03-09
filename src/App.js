import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import SocialMediaWall from './components/SocialMediaWall';
import MeetRecruiters from './components/MeetRecruiters';
import SuccessStories from './components/SuccessStories';
import MeetMentor from './components/MeetMentor';
import Incentives from './components/Incentives';
import SponsorsPage from './components/SponsorsPage';
import NoShowReducer from './components/NoShowReducer';

// Component to redirect to HTML page
const HTMLPage = () => {
  window.location.href = "/yourpage.html"; // Redirect to the HTML page
  return null; // No need to render anything
};

const HTMLPage1 = () => {
  window.location.href = "/community.html"; // Redirect to the HTML page
  return null; // No need to render anything
};

const HTMLPage2 = () => {
  window.location.href = "/leaderboard.html"; // Redirect to the HTML page
  return null; // No need to render anything
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/social-media" element={<SocialMediaWall />} />
        <Route path="/meet-recruiters" element={<SponsorsPage />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        {/* <Route path="/meet-mentor" element={<MeetMentor />} /> */}
        {/* <Route path="/incentives" element={<Incentives />} /> */}
        {/* <Route path="/leaderboard" element={<NoShowReducer />} /> */}
        <Route path="/incentives" element={<HTMLPage />} /> {/* New Route for HTML Page */}
        <Route path="/community" element={<HTMLPage1 />} /> {/* New Route for HTML Page */}
        <Route path="/leaderboard" element={<HTMLPage2 />} /> {/* New Route for HTML Page */}
      </Routes>
    </Router>
  );
}

export default App;
