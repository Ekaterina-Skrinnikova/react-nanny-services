import css from "../InputTimePiker/InputTimePiker.module.css";
import sprite from "../../images/symbol.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpenTimePicker } from "../../redux/modal/selectors";
import { toggleIsOpenTimePicker } from "../../redux/modal/slice";

export default function InputTimePiker() {
  const dispatch = useDispatch();
  const IsOpenTimePicker = useSelector(selectIsOpenTimePicker);
  const handleOpenTimePicker = () => {
    dispatch(toggleIsOpenTimePicker());
  };
  return (
    <div className={css.timePiker}>
      <input
        type="text"
        className={css.timeInput}
        placeholder="00:00"
        readOnly
      />
      <button className={css.timeIcon} onClick={handleOpenTimePicker}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-clock`}></use>
        </svg>
      </button>

      {IsOpenTimePicker && (
        <div className={css.timeDropDown}>
          <div className={css.dropdownHeader}>Meeting time</div>
          <ul className={css.timeOptions}>
            <li className={css.timeOption} data-time="08:00">
              <span>08</span> : <span>00</span>
            </li>
            <li className={css.timeOption} data-time="08:30">
              <span>08</span> : <span>30</span>
            </li>
            <li className={css.timeOption} data-time="09:00">
              <span>09</span> : <span>00</span>
            </li>
            <li className={css.timeOption} data-time="09:30">
              <span>09</span> : <span>30</span>
            </li>
            <li className={css.timeOption} data-time="10:00">
              <span>10</span> : <span>00</span>
            </li>
            <li className={css.timeOption} data-time="10:30">
              <span>10</span> : <span>30</span>
            </li>
            <li className={css.timeOption} data-time="11:00">
              <span>11</span> : <span>00</span>
            </li>
            <li className={css.timeOption} data-time="11:30">
              <span>11</span> : <span>30</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
