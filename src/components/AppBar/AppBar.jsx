import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/users/selectors";
import AuthHeader from "../AuthHeader/AuthHeader";
import UserHeader from "../UserHeader/UserHeader";
import { selectTypeHeader } from "../../redux/header/selectors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setTypeHeader } from "../../redux/header/slice";
import css from "../AppBar/AppBar.module.css";

export default function AppBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const typeHeader = useSelector(selectTypeHeader);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        dispatch(setTypeHeader("home"));
        break;
      case "/nannies":
        dispatch(setTypeHeader("nannies"));
        break;
      case "/welcome":
        dispatch(setTypeHeader("nannies"));
        break;
    }
  }, [dispatch, location]);

  const renderHeader = () => {
    if (isLoggedIn) {
      return <UserHeader />;
    }
    switch (typeHeader) {
      case "home":
        return <AuthHeader />;

      case "nannies":
        return (
          <AuthHeader className={css.bgColor} classBtn={css.btnRegNannies} />
        );
    }
  };

  return renderHeader();
}
