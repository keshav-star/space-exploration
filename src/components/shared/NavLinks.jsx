import { Link } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

const NavLinks = () => {
  const { authData } = useAuth();
  return (
    <div className="nav-links">
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>{authData?.name} Profile</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default NavLinks;
