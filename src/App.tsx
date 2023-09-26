import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import PageEventList from "./pages/eventList/Eventlist";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meets/:ubication" element={<PageEventList />} />
      </Routes>
    </main>
  );
}

export default App;
