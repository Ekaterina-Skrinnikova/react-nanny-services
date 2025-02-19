import css from "../WelcomePage/WelcomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModalLogin, openModalReg } from "../../redux/modal/slice";
import {
  selectIsOpenModalLogin,
  selectIsOpenModalReg,
} from "../../redux/modal/selectors";
import LogInForm from "../../components/LogInForm/LogInForm";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

export default function WelcomePage() {
  const dispatch = useDispatch();
  const isOpenModalLogin = useSelector(selectIsOpenModalLogin);
  const isOpenModalReg = useSelector(selectIsOpenModalReg);

  const handleOpenModalLogin = () => {
    dispatch(openModalLogin());
  };

  const handleOpenModalReg = () => {
    dispatch(openModalReg());
  };

  return (
    <div className={css.wrapper}>
      <h1>Welcome!</h1>

      <div className={css.blockOut}>
        <div className={css.block}>
          <p>Is this your first time here?</p>
          <button className={css.btn} onClick={handleOpenModalReg}>
            Registration
          </button>
        </div>
        <div className={css.block}>
          <p> Already have an account?</p>
          <button className={css.btn} onClick={handleOpenModalLogin}>
            Log In
          </button>
        </div>
      </div>

      {isOpenModalLogin && <LogInForm />}
      {isOpenModalReg && <RegisterForm />}
    </div>
  );
}
