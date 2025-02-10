import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import sprite from "../../images/sprite.svg";
import css from "../HomePage/HomePage.module.css";
import {
  selectIsOpenModalLogin,
  selectIsOpenModalReg,
} from "../../redux/modal/selectors";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function HomePage() {
  const isOpenModalReg = useSelector(selectIsOpenModalReg);
  const isOpenModalLogin = useSelector(selectIsOpenModalLogin);

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.blockLeft}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <p className={css.text}>Find Babysitters Online for All Occasions</p>
          <Button className={css.button} type="button">
            Get started
            <svg className={css.icon}>
              <use href={`${sprite}#icon-arrow`}></use>
            </svg>
          </Button>
        </div>
        <div className={css.blockRight}>
          <div className={css.container}>
            <div className={css.blockImg}>
              <svg className={css.iconCheck}>
                <use href={`${sprite}#icon-check`}></use>
              </svg>
            </div>
            <div>
              <p className={css.blockRightText}>Experienced nannies</p>
              <p className={css.blockRightNum}>15,000</p>
            </div>
          </div>
        </div>
      </div>
      {isOpenModalLogin && <LogInForm />}
      {isOpenModalReg && <RegisterForm />}
    </>
  );
}
