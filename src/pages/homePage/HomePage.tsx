import HomeSearch from "../../components/HomeSearch/HomeSearch";
import Header from "../../components/header/Header";
import "./Homepage.css";

function HomePage() {
  console.log("hola");

  return (
    <main>
      <Header />
      <HomeSearch />
    </main>
  );
}

export default HomePage;
