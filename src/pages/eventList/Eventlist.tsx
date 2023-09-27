import React from "react";
import "./eventlistPage.css";
import Header from "../../components/header/Header";
import MeetsList from "../../components/meetsList/MeetsList";
import SeachBar from "../../components/SeachBar/search";
import Footer from "../../components/footer/Footer";

const PageEventList: React.FC = () => {
  return (
    <section className="MeetListPage">
      <Header />
      <SeachBar />
      <MeetsList />
      <Footer />
    </section>
  );
};

export default PageEventList;
