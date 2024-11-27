// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import Button from "../../components/Button/Button";
import sprite from "../../images/sprite.svg";
import css from "../HomePage/HomePage.module.css";
// import { getAllNannies } from "../../redux/nannies/operations.js";

export default function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllNannies());
  // }, [dispatch]);

  return (
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
  );
}
