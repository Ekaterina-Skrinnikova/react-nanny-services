import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../FiltersField/FiltersField.module.css";
// import { selectFilters } from "../../redux/filters/selectors.js";
// import { setFilters } from "../../redux/filters/slice.js";
import { toggleIsOpenPopUp } from "../../redux/modal/slice.js";
import { selectIsOpenPopUp } from "../../redux/modal/selectors.js";

export default function FiltersField() {
  const dispatch = useDispatch();
  const isOpenPopUp = useSelector(selectIsOpenPopUp);

  // const handleFiltersChange = (e) => {
  //   dispatch(setFilters(e.target.value));
  // };

  const handleButtonClick = () => {
    dispatch(toggleIsOpenPopUp());
  };
  return (
    <div className="select">
      <label className={css.label} htmlFor="filter">
        Filters
      </label>

      <input className="select-input" type="hidden" id="filter" />
      <div className="select-head">Choose</div>
      <button className="select-btn" type="button" onClick={handleButtonClick}>
        <svg className={css.svg}>
          <use href={`${sprite}#icon-chevron-down`}></use>
        </svg>
      </button>

      <ul className={clsx(isOpenPopUp ? "select-list" : "visually-hidden")}>
        <li className="select-item">A to Z</li>
        <li className="select-item">Z to A</li>
        <li className="select-item">Less than 10$</li>
        <li className="select-item">Creater than 10$</li>
        <li className="select-item">Popular</li>
        <li className="select-item">Not popular</li>
        <li className="select-item">Show all</li>
      </ul>
    </div>
  );
}
