import { Meet } from "../../types/meet";
import subjecImg from "../../assets/subject.png";
import calendarImg from "../../assets/calendar.svg";
interface Props {
  meet: Meet;
}

const EvetDetail = ({ meet }: Props) => {
  return (
    <>
      <ul>
        <li>{meet.title}</li>
        <li>
          <img src={meet.photo} alt="" />
        </li>
        <li>{meet.description}</li>
      </ul>
      <ul>
        <li>
          <img src={subjecImg} alt="" />
          <p>{meet.subject}</p>
        </li>
        <li>{meet.ubication}</li>
        <li>
          <img src={calendarImg} alt="" />
          {meet.date}
        </li>
      </ul>
      <ul>
        <li>Editar Evento</li>
        <li>Eliminar</li>
      </ul>
    </>
  );
};

export default EvetDetail;
