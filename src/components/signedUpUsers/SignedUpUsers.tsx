import { MeetsUser } from "../../types/meet";
import "./signedUpUsers.css";
interface Props {
  signedUsers: MeetsUser[];
}
const SignedUpUsers = ({ signedUsers }: Props) => {
  return (
    <section className="signedUpUsersSection">
      <ul>
        {signedUsers.slice(0, 4).map((user) => {
          return (
            <li key={user.id}>
              <img src={user.user_profile_img} alt="User image" />
            </li>
          );
        })}
        <li>{signedUsers.length}</li>
      </ul>
    </section>
  );
};

export default SignedUpUsers;
