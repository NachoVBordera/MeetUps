import { useNavigate } from "react-router-dom";
import { Meet } from "../../types/meet";
import userPleaceHolder from "../../assets/userpleaceholder.png";

import "./UserAside.css";
interface Props {
  meet: Meet;
}
const UserAside = ({ meet }: Props) => {
  const navegate = useNavigate();
  return (
    <section
      className="userAsideSection"
      onClick={() => navegate(`/meets/user/${meet.user_id}`)}
    >
      <ul>
        <li>
          <img src={meet.user_image ?? userPleaceHolder} alt="User Image" />
        </li>
        <li>{meet.user_name}</li>
      </ul>
    </section>
  );
};

export default UserAside;
