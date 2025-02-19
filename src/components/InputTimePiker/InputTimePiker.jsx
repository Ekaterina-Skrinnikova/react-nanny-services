import { clsx } from "clsx";
import { useRef, useState } from "react";
import { WiTime4 } from "react-icons/wi";
import css from "../InputTimePiker/InputTimePiker.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTimePicker } from "../../redux/modal/slice";
import { selectIsToggleTimePicker } from "../../redux/modal/selectors";

export default function InputTimePiker({ value, onChange, options }) {
  const dispatch = useDispatch();
  const isToggleTimePicker = useSelector(selectIsToggleTimePicker);
  const [currentIndex, setCurrentIndex] = useState(options.indexOf(value));
  const dropdownRef = useRef();

  const handleToggle = () => {
    dispatch(toggleTimePicker());
  };

  const handleOptionClick = (time) => {
    onChange(time);
    dispatch(toggleTimePicker());
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0 && currentIndex < options.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={css.timePiker}>
      <input
        type="text"
        className={css.timeInput}
        placeholder="00:00"
        readOnly
        value={value ?? ""}
      />
      <button className={css.timeIcon} onClick={handleToggle} type="button">
        <WiTime4 size={20} />
      </button>

      {isToggleTimePicker && (
        <div
          className={css.timeDropdown}
          ref={dropdownRef}
          onWheel={handleWheel}
        >
          <div className={css.dropdownHeader}>Meeting time</div>

          <ul className={css.timeOptions}>
            {options &&
              options.map((timeOption, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      handleOptionClick(timeOption);
                    }}
                    className={clsx(css.timeOption, {
                      [css.timeOptionActive]: value === timeOption,
                    })}
                  >
                    {timeOption}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
