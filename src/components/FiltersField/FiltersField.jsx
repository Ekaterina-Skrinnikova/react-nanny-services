import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../FiltersField/FiltersField.module.css";
import { toggleIsOpenPopUp } from "../../redux/modal/slice.js";
import { selectIsOpenPopUp } from "../../redux/modal/selectors.js";
import { useEffect } from "react";
import { getNannies } from "../../redux/nannies/operations.js";
import { selectSelectedItem } from "../../redux/nannies/selectors.js";
import { setSelectedItem } from "../../redux/nannies/slice.js";

export default function FiltersField() {
  const dispatch = useDispatch();
  const isOpenPopUp = useSelector(selectIsOpenPopUp);
  const selectedItem = useSelector(selectSelectedItem);

  const options = [
    "A to Z",
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  const handleButtonClick = () => {
    dispatch(toggleIsOpenPopUp());
  };

  const handleOptionClick = (option) => {
    dispatch(setSelectedItem(option));
    dispatch(toggleIsOpenPopUp());
  };

  useEffect(() => {
    dispatch(getNannies(selectedItem));
  }, [dispatch, selectedItem]);

  return (
    <div className="select">
      <p className={css.label}>Filters</p>

      <div className="select-head">{selectedItem}</div>

      <button className="select-btn" type="button" onClick={handleButtonClick}>
        <svg className={css.svg}>
          <use href={`${sprite}#icon-chevron-down`}></use>
        </svg>
      </button>

      <ul className={clsx(isOpenPopUp ? "select-list" : "visually-hidden")}>
        {options.map((option, i) => {
          return (
            <li
              className={clsx("select-item", {
                "select-item-active": selectedItem === option,
              })}
              key={i}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
