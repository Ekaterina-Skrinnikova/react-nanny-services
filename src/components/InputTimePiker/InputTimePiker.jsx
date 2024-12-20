import css from "../InputTimePiker/InputTimePiker.module.css";
// import sprite from "../../images/sprite.svg";
import sprite from "../../images/symbol.svg";

export default function InputTimePiker() {
  return (
    <div className={css.timePiker}>
      <input
        type="text"
        className={css.timeInput}
        placeholder="00:00"
        readOnly
      />
      <button className={css.timeIcon}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-clock`}></use>
        </svg>
      </button>

      <div className={css.timeDropDown}>
        <div className={css.dropdownHeader}>Meeting time</div>
        <ul className={css.timeOptions}>
          <li className={css.timeOption} data-time="08:00">
            08:00
          </li>
          <li className={css.timeOption} data-time="08:30">
            08:30
          </li>
          <li className={css.timeOption} data-time="09:00">
            09:00
          </li>
          <li className={css.timeOption} data-time="09:30">
            09:30
          </li>
          <li className={css.timeOption} data-time="10:00">
            10:00
          </li>
          <li className={css.timeOption} data-time="10:30">
            10:30
          </li>
          <li className={css.timeOption} data-time="11:00">
            11:00
          </li>
          <li className={css.timeOption} data-time="11:30">
            11:30
          </li>
        </ul>
      </div>
    </div>
  );
}
