import { useParams } from "react-router-dom";
import MeetCard from "../ui/MeetCard/MeetCard";
import React from "react";
import { getmeetsCity } from "../../usecases/db/getmeetsCity.usecase";
import "./MeetsList.css";
const MeetsList: React.FC = () => {
  const [meets, setmeets] = React.useState([]);
  const { ubication } = useParams();
  console.log(ubication);

  React.useEffect(() => {
    getmeetsCity(ubication).then((meets) => {
      setmeets(meets);
    });
  }, []);

  return (
    <section className="contailerList">
      <ul>
        {meets.map((meet) => {
          return (
            <li>
              <MeetCard meet={meet} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MeetsList;
