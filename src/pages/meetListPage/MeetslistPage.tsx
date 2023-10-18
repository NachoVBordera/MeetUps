import React from "react";
import "./meetlistPage.css";
import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import MeetFilter from "../../components/MeetFilter/MeetFilter";
import { RenderType } from "../../types/meet";

const PageEventList: React.FC = () => {
  const [filter, setFilter] = React.useState<string>("");
  return (
    <main className="MeetListPage">
      <Header nav={true} />
      <aside>
        <SeachBar />
        <MeetFilter setFilter={setFilter} />
        <ButtonCreateSection />
      </aside>
      <MeetsList render={RenderType.UBICATION} filter={filter} />
      <Footer />
    </main>
  );
};

export default PageEventList;
