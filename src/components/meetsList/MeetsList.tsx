import { useNavigate, useParams } from "react-router-dom";
import MeetCard from "../ui/MeetCard/MeetCard";
import React from "react";
import { getmeetsCity } from "../../usecases/db/getmeetsCity.usecase";
import "./MeetsList.css";
import { Meet } from "../../types/meet";

const MeetsList: React.FC = () => {
  const [meets, setmeets] = React.useState<Meet[]>([]);
  const { ubication } = useParams();
  const navegate = useNavigate();

  React.useEffect(() => {
    if (ubication)
      getmeetsCity(ubication).then((meets) => {
        setmeets(meets);
      });
  }, [ubication]);

  const handleNavegate = (id: number) => {
    navegate(`/meet/${id}`);
  };

  return (
    <section className="contailerList">
      <ul>
        {meets.map((meet) => {
          return (
            <li key={meet.id}>
              <MeetCard meet={meet} handleNavegate={handleNavegate} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MeetsList;
