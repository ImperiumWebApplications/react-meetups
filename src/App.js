// Setup routing for AllMeetups, Favorites and NewMeetup components

import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new" element={<NewMeetup />} />
        {/* Build the invalid match URL using react router 6 */}
        <Route path="*" element={<div>Invalid URL</div>} />
      </Routes>
    </Layout>
  );
};
export default App;
