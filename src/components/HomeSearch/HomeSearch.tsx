import SeachBar from "../SeachBar/search";
import "./HomeSearch.css";
import no from "../../assets/NO.png";
import React from "react";
const HomeSearch: React.FC = () => {
  return (
    <section className="homeSearch">
      <div role="form">
        <label>
          <span>
            <img src={no} alt="No" />
            sigas la corriente. Crea tus propios caminos de divesrsión
          </span>
          <SeachBar />
        </label>
      </div>
    </section>
  );
};

export default HomeSearch;
