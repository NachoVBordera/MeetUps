import "./header.css";
import logo from "../../assets/MEETUPSlogo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navegate = useNavigate();
  const { isSignedIn } = useAuth();
  const handleClik = (): void => {
    navegate("/");
  };
  return (
    <header>
      <img onClick={handleClik} src={logo} alt="Meetups logo" />
      {isSignedIn ? (
        <button className="userButton" role="userbuton">
          <UserButton />
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
