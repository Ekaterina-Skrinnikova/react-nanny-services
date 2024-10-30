import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </div>
  );
}
