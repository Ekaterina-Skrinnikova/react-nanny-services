import { useDispatch, useSelector } from "react-redux";
import FiltersField from "../../components/FiltersField/FiltersField";
import ListCardNannies from "../../components/ListCardNannies/ListCardNannies";
import { getNannies } from "../../redux/nannies/operations.js";
import { useEffect } from "react";
import {
  selectIsOpenModalLogin,
  selectIsOpenModalReg,
} from "../../redux/modal/selectors.js";
import css from "../NanniesPage/NanniesPage.module.css";
import LogInForm from "../../components/LogInForm/LogInForm.jsx";
import RegisterForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import {
  selectPage,
  selectPerPage,
  selectSelectedItem,
} from "../../redux/nannies/selectors.js";

export default function Nannies() {
  const dispatch = useDispatch();

  const isOpenModalReg = useSelector(selectIsOpenModalReg);
  const isOpenModalLogin = useSelector(selectIsOpenModalLogin);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const option = useSelector(selectSelectedItem);

  // console.log(option, page, perPage);

  useEffect(() => {
    dispatch(getNannies({ option, page, perPage }));
  }, [dispatch, option, page, perPage]);

  return (
    <>
      <div className="container">
        <div className={css.wrapper}>
          <FiltersField />
          <ListCardNannies />
        </div>
      </div>

      {isOpenModalLogin && <LogInForm />}
      {isOpenModalReg && <RegisterForm />}
    </>
  );
}
