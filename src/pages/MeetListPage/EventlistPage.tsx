import React from "react";
import "./eventlistPage.css";
import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import MeetFilter from "../../components/MeetFilter/MeetFilter";
import { RenderType } from "../../types/meet";

const PageEventList: React.FC = () => {
  return (
    <main className="MeetListPage">
      <Header nav={true} />
      <aside>
        <SeachBar />
        <MeetFilter />
        <ButtonCreateSection />
      </aside>
      <MeetsList render={RenderType.UBICATION} />
      <Footer />
    </main>
  );
};

export default PageEventList;
