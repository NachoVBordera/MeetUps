import { useNavigate } from "react-router-dom";
import ButtonUi from "../ui/buttonIU/Button.ui";
import { useUser } from "@clerk/clerk-react";
import "./ButtonCreateSection.css";
const ButtonCreateSection: React.FC = () => {
  const { user } = useUser();
  const navegate = useNavigate();

  if (user) {
    return (
      <section className="ButtonCreateSection">
        <ButtonUi
          text="Crea tu evento"
          callback={() => navegate("/meets/new")}
        />
        <ButtonUi
          text="Ver Tus Eventos"
          callback={() => navegate(`/meets/user/${user.id}`)}
        />
      </section>
    );
  } else {
    return <></>;
  }
};

export default ButtonCreateSection;
