import React from "react";

import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";

const PageEventList: React.FC = () => {
  return (
    <section>
      <Header />
      <SeachBar />
      <MeetsList />
    </section>
  );
};

export default PageEventList;
