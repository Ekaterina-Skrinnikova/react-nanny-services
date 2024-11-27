import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import css from "../../components/AppBar/AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.container}>
      <div className={css.wrapper}>
        <Logo />
        <Navigation />
        <AuthNav />
      </div>
    </header>
  );
}
