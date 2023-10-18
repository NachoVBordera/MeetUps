import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import PageEventList from "./pages/meetListPage/MeetslistPage";
import NewMeetPage from "./pages/newMeet/NewMeetForm";
import MeetDetailPage from "./pages/meetDetailPage/MeetDetailPage";
import PageEventListByUser from "./pages/meetListPagebyUser/MeetlistPageUser";
import { ToastContainer } from "react-toastify";
import EditMeetPage from "./pages/editMeetPage/EditMeetPage";

function App() {
  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meets/:ubication" element={<PageEventList />} />
        <Route path="/meets/user/:user" element={<PageEventListByUser />} />
        <Route path="/meets/new" element={<NewMeetPage />} />
        <Route path="/meet/:id" element={<MeetDetailPage />} />
        <Route path="/meet/edit/:id" element={<EditMeetPage />} />
      </Routes>
    </main>
  );
}

export default App;
