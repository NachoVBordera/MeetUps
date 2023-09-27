import React from "react";
import love from "../../assets/love.svg";
import "./footer.css";
const Footer: React.FC = () => {
  return (
    <footer>
      <section>
        <p>Mate with</p>
        <span>
          <img src={love} alt="love" />
        </span>
        <p>By Nacho</p>
      </section>
    </footer>
  );
};

export default Footer;
