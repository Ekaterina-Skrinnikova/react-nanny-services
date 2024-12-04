import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/users/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
