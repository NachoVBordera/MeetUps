import SeachBar from "../seachBar/search";
import "./HomeSearch.css";
import no from "../../assets/NO.png";

const HomeSearch = () => {
  return (
    <section className="homeSearch">
      <section role="form">
        <label>
          <span>
            <img src={no} alt="No" />
            <p>sigas la corriente.</p>
          </span>
          <p>Crea tus propios caminos de divesrsión</p>
          <SeachBar />
        </label>
      </section>
    </section>
  );
};

export default HomeSearch;
