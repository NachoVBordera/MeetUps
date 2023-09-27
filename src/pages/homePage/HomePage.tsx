import HomeSearch from "../../components/HomeSearch/HomeSearch";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Homepage.css";

function HomePage() {
  return (
    <main className="HomePageMain">
      <Header />
      <HomeSearch />
      <Footer />
    </main>
  );
}

export default HomePage;
