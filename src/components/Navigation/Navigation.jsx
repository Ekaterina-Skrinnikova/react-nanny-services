import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/nannies">
        Nannies
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
}
