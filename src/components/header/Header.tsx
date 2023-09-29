import "./header.css";
import logo from "../../assets/MEETUPSlogo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
function Header() {
  const { isSignedIn } = useAuth();
  const { url } = useParams();

  return (
    <header>
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
