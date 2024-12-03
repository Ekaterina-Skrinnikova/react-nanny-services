import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import css from "../../components/AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.container}>
      <div className={css.wrapper}>
        <Logo />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
