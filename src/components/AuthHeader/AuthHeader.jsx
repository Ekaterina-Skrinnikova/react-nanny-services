import clsx from "clsx";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import css from "../AuthHeader/AuthHeader.module.css";

export default function AuthHeader({ className, classBtn }) {
  return (
    <header className={clsx(css.container, className)}>
      <div className={css.wrapper}>
        <div className={css.box}>
          <Logo />
        </div>
        <div className={css.box}>
          <Navigation />
        </div>
        <div className={css.box}>
          <AuthNav classBtn={classBtn} />
        </div>
      </div>
    </header>
  );
}
