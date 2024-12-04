import css from "../../components/AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";
import AuthHeader from "../AuthHeader/AuthHeader";
import UserHeader from "../UserHeader/UserHeader";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <>{isLoggedIn ? <UserHeader /> : <AuthHeader />}</>;
}
