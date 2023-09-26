import "./header.css";
import logo from "../../assets/MEETUPSlogo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
function Header() {
  const { isSignedIn } = useAuth();
  return (
    <header>
      <img src={logo} alt="Meetups logo" />
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
