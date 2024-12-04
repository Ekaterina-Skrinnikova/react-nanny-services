import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import css from "../AuthHeader/AuthHeader.module.css";

export default function AuthHeader() {
  return (
    <header className={css.container}>
      <div className={css.wrapper}>
        <div className={css.box}>
          <Logo />
        </div>
        <div className={css.box}>
          <Navigation />
        </div>
        <div className={css.box}>
          <AuthNav />
        </div>
      </div>
    </header>
  );
}
