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
    <div className="container flex">
      <div className={css.blockLeft}>
        <h1>Make Life Easier for the Family:</h1>
        <p>Find Babysitters Online for All Occasions</p>
        <Button type="button">Get started</Button>
      </div>
      <div className={css.blockRight}>
        <div>
          <div>
            <svg>
              <use href={`${sprite}#icon-chack`}></use>
            </svg>
          </div>
          <div>
            <p>Experienced nannies</p>
            <p>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
