import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "../UserHeader/UserHeader.module.css";

export default function UserHeader() {
  return (
    <header className={css.container}>
      <div className={css.wrapper}>
        <Logo />
        <Navigation />
        <UserMenu />
      </div>
    </header>
  );
}
