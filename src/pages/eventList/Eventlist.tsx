import React from "react";
import "./eventlistPage.css";
import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";

const PageEventList: React.FC = () => {
  return (
    <main className="MeetListPage">
      <Header />
      <aside>
        <ButtonCreateSection />
        <SeachBar />
      </aside>
      <MeetsList />
      <Footer />
    </main>
  );
};

export default PageEventList;
