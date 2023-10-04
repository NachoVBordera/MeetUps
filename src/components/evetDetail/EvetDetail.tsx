import { Meet } from "../../types/meet";
import subjecImg from "../../assets/subject.png";
import calendarImg from "../../assets/calendar.svg";
import { useUser } from "@clerk/clerk-react";
import "./eventdetail.css";
import { singUpUserMeet } from "../../usecases/db/singUpUserMeet.usecase";
interface Props {
  meet: Meet;
}

const EvetDetail = ({ meet }: Props) => {
  const { user } = useUser();
  console.log({ user });

  return (
    meet && (
      <section className="meetDetail">
        <ul>
          <li>{meet.title}</li>
          <li>
            <img src={meet.photo} alt="" />
          </li>
          <li>{meet.description}</li>
        </ul>
        <ul>
          <li>
            <img className="icondetail" src={subjecImg} alt="" />
            <p>{meet.subject}</p>
          </li>
          <li>{meet.ubication}</li>
          <li>
            <img className="icondetail" src={calendarImg} alt="" />
            {meet.date}
          </li>
        </ul>
        {user ? (
          user.id !== meet.user_id ? (
            <ul className="optionsUl">
              <li>
                <button>Editar Evento</button>
              </li>
              <li>
                <button>Eliminar</button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <button
                  className="singUpButton"
                  onClick={() => singUpUserMeet(user.id, meet.id)}
                >
                  Unirme!!
                </button>
              </li>
            </ul>
          )
        ) : (
          ""
        )}
      </section>
    )
  );
};

export default EvetDetail;
