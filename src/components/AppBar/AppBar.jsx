import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  return (
    <header>
      <Logo />
      <Navigation />
      <AuthNav />
    </header>
  );
}
