import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink className={clsx(css.link, css.linkLogin)} to="/login">
        Log In
      </NavLink>
      <NavLink className={clsx(css.link, css.linkReg)} to="/registration">
        Registration
      </NavLink>
    </div>
  );
}
