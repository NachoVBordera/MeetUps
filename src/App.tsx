import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import PageEventList from "./pages/eventList/Eventlist";
import NewMeetPage from "./pages/newMeet/NewMeetForm";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meets/:ubication" element={<PageEventList />} />
        <Route path="/meets/:id" element={<PageEventList />} />
        <Route path="/meets/new" element={<NewMeetPage />} />
      </Routes>
    </main>
  );
}

export default App;
