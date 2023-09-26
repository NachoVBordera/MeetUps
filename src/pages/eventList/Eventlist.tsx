import React from "react";
import { useParams } from "react-router-dom";
import { getmeetsCity } from "../../usecases/db/getmeetsCity";
import MeetCard from "../../components/MeetCard/MeetCard";

const PageEventList: React.FC = () => {
  const [meets, setmeets] = React.useState([]);
  const { ubication } = useParams();
  console.log(ubication);
  React.useEffect(() => {
    getmeetsCity(ubication).then((meets) => {
      setmeets(meets);
    });
  }, []);

  return (
    <section>
      {meets.map((meet) => {
        return <MeetCard meet={meet} />;
      })}
    </section>
  );
};

export default PageEventList;
