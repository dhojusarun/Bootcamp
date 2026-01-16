import { NavLink } from "react-router-dom";
import "./Nav.css";

const getNavClass = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={getNavClass}>
        Form
      </NavLink>
      <NavLink to="/counter" className={getNavClass}>
        Counter
      </NavLink>
      <NavLink to="/todo" className={getNavClass}>
        Todo
      </NavLink>
    </nav>
  );
};

export default Nav;
