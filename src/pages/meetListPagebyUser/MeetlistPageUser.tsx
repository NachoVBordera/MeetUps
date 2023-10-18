import React from "react";

import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import MeetFilter from "../../components/meetFilter/MeetFilter";
import { RenderType } from "../../types/meet";

const PageEventListByUser: React.FC = () => {
  const [filter, setFilter] = React.useState<string>("");

  return (
    <main className="MeetListPage">
      <Header nav={true} />
      <aside>
        <SeachBar />
        <MeetFilter setFilter={setFilter} />
        <ButtonCreateSection />
      </aside>
      <MeetsList render={RenderType.USER} filter={filter} />
      <Footer />
    </main>
  );
};

export default PageEventListByUser;
