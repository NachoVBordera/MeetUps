import HomeSearch from "../../components/HomeSearch/HomeSearch";
import ButtonCreateSection from "../../components/createListOwnSection/createListButtonsSection";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Homepage.css";

function HomePage() {
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
