import css from "../AuthNav/AuthNav.module.css";
import clsx from "clsx";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { openModalLogin, openModalReg } from "../../redux/modal/slice";

export default function AuthNav() {
  const dispatch = useDispatch();

  const handleOpenModalReg = () => {
    dispatch(openModalReg());
  };

  const handleOpenModalLogin = () => {
    dispatch(openModalLogin());
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={handleOpenModalLogin}
        className={clsx(css.button, css.btnLogin)}
      >
        Log In
      </Button>

      <Button
        onClick={handleOpenModalReg}
        className={clsx(css.button, css.btnReg)}
      >
        Registration
      </Button>
    </div>
  );
}
