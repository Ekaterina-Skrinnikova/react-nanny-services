import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";
import AuthHeader from "../AuthHeader/AuthHeader";
import UserHeader from "../UserHeader/UserHeader";
import { selectTypeHeader } from "../../redux/header/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const typeHeader = useSelector(selectTypeHeader);

  {
    typeHeader === "home" ? <AuthHeader /> : <UserHeader />;
  }

  return <>{isLoggedIn ? <UserHeader /> : <AuthHeader />}</>;
}
