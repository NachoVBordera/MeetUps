import HomeSearch from "../../components/homeSearch/HomeSearch";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Homepage.css";

function HomePage() {
  console.log("What are you looking for🤨?");
  return (
    <main className="HomePageMain">
      <Header nav={false} />
      <ButtonCreateSection />
      <HomeSearch />
      <Footer />
    </main>
  );
}

export default HomePage;
