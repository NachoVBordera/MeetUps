import { useNavigate, useParams } from "react-router-dom";
import MeetCard from "../ui/MeetCard/MeetCard";
import React from "react";
import "./MeetsList.css";
import { Meet, RenderType } from "../../types/meet";
import { getMeetUser } from "../../usecases/db/getMeetsUser.usecase";
import { getMeetsCity } from "../../usecases/db/getMeetsCity.usecase";

interface Props {
  render: RenderType;
}
const MeetsList = ({ render }: Props) => {
  const [meets, setmeets] = React.useState<Meet[]>([]);
  const navegate = useNavigate();
  const { ubication, user } = useParams();
  const param = render === RenderType.UBICATION ? ubication : user;

  React.useEffect(() => {
    const fetchData = async () => {
      if (param !== undefined) {
        let fetchedMeets;
        if (render === RenderType.UBICATION) {
          fetchedMeets = await getMeetsCity(param);
        } else if (render === RenderType.USER) {
          fetchedMeets = await getMeetUser(param);
        }

        if (fetchedMeets) {
          setmeets(fetchedMeets);
        }
      }
    };

    fetchData();
  }, [render, param]);

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
