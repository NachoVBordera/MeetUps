import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import PageEventList from "./pages/MeetListPage/EventlistPage";
import NewMeetPage from "./pages/newMeet/NewMeetForm";
import MeetDetailPage from "./pages/meetDetailPage/EventDetailPage";
import PageEventListByUser from "./pages/MeetListPagebyUser/EventlistPageUser";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meets/:ubication" element={<PageEventList />} />
        <Route path="/meets/user/:user" element={<PageEventListByUser />} />
        <Route path="/meets/new" element={<NewMeetPage />} />
        <Route path="/meet/:id" element={<MeetDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
