import { useNavigate, useParams } from "react-router-dom";
import MeetCard from "../ui/meetCard/MeetCard";
import React from "react";
import "./MeetsList.css";
import { Meet, RenderType } from "../../types/meet";
import { getMeetUser } from "../../usecases/db/getMeetsUser.usecase";
import { getMeetsCity } from "../../usecases/db/getMeetsCity.usecase";
import noMeet from "../../assets/nomeet.png";
interface Props {
  render: RenderType;
  filter: string;
}
const MeetsList = ({ render, filter }: Props) => {
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

  const filteredMeets: Meet[] = React.useMemo(() => {
    return meets !== null
      ? meets.filter((meet) => {
          return meet.subject
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase());
        })
      : meets;
  }, [meets, filter]);
  console.log(filteredMeets);

  const handleNavegate = (id: number) => {
    navegate(`/meet/${id}`);
  };

  return (
    <section className="contailerList">
      {filteredMeets.length !== 0 ? (
        <ul>
          {filteredMeets.map((meet) => {
            return (
              <li key={meet.id}>
                <MeetCard meet={meet} handleNavegate={handleNavegate} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="noMeetUpUl">
          <li>
            <img className="noMeetUpImage" src={noMeet} alt="" />
          </li>
        </ul>
      )}
    </section>
  );
};

export default MeetsList;
