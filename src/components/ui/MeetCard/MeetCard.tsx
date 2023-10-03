import { Meet } from "../../../types/meet";
import "./Meetcard.css";
import people from "../../../assets/people.svg";
import subject from "../../../assets/subject.png";
import smile from "../../../assets/face.png";
import calendar from "../../../assets/calendar.svg";
import pointer from "../../../assets/pointer.svg";
interface Props {
  meet: Meet;
  handleNavegate: (id: number) => void;
}

const MeetCard = ({ meet, handleNavegate }: Props) => {
  return (
    <article className="meetArticle" onClick={() => handleNavegate(meet.id)}>
      <h3>{meet.title}</h3>

      <section className="imgSection">
        <img src={meet.photo} alt="event image" />
        <span>
          <img src={people} className="iconStile" alt="participants" />
          <p>{meet.signedup_users.length}</p>
        </span>
      </section>

      <section className="dataSection">
        <div>
          <img src={subject} className="iconStile" alt="participants" />

          {meet.subject}
        </div>
        <div>
          <img src={calendar} className="iconStile" alt="calendar-date" />
          {meet.date}
        </div>
      </section>
      <section className="ubicationSection">
        <img src={pointer} alt="calendar-date" />
        <p>{meet.ubication}</p>
      </section>
      <span className="smileAdd">
        <img src={smile} alt="" />
      </span>
    </article>
  );
};

export default MeetCard;
