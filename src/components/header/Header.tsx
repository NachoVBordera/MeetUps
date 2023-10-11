import "./header.css";
import logo from "../../assets/MEETUPSlogo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { useParams, useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow-left.svg";
interface Props {
  nav: boolean;
}
function Header({ nav }: Props) {
  const { isSignedIn } = useAuth();
  const { url } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <header>
      {nav && (
        <nav>
          <button onClick={handleClick}>
            <img src={arrow} alt="Volver" />
          </button>
        </nav>
      )}
      <img src={logo} alt="Meetups logo" />
      {isSignedIn ? (
        <button className="userButton" role="userbuton">
          <UserButton afterSignOutUrl={url ?? "/"} />
        </button>
      ) : (
        <SignInButton>
          <button role="logIn">LOGIN</button>
        </SignInButton>
      )}
    </header>
  );
}

export default Header;
