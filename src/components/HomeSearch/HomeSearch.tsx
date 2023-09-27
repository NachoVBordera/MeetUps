import SeachBar from "../SeachBar/search";
import "./HomeSearch.css";
import no from "../../assets/NO.png";
import React from "react";
const HomeSearch: React.FC = () => {
  return (
    <section className="homeSearch">
      <section role="form">
        <label>
          <span>
            <img src={no} alt="No" />
            <p>sigas la corriente.</p>
          </span>
          <p>sigas la corriente. Crea tus propios caminos de divesrsión</p>
          <SeachBar />
        </label>
      </section>
    </section>
  );
};

export default HomeSearch;
