import React from "react";

import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import MeetFilter from "../../components/MeetFilter/MeetFilter";
import { RenderType } from "../../types/meet";

const PageEventListByUser: React.FC = () => {
  return (
    <main className="MeetListPage">
      <Header nav={true} />
      <aside>
        <SeachBar />
        <MeetFilter />
        <ButtonCreateSection />
      </aside>
      <MeetsList render={RenderType.USER} />
      <Footer />
    </main>
  );
};

export default PageEventListByUser;
