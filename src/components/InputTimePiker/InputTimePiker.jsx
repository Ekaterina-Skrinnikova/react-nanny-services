import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { WiTime4 } from "react-icons/wi";
import css from "../InputTimePiker/InputTimePiker.module.css";
import sprite from "../../images/symbol.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  setSelectedTimeOption,
  toggleTimePicker,
} from "../../redux/modal/slice";
import {
  selectCurrentIndex,
  selectIsToggleTimePicker,
  selectSelectedTimeOption,
} from "../../redux/modal/selectors";

export default function InputTimePiker() {
  const dispatch = useDispatch();
  const isToggleTimePicker = useSelector(selectIsToggleTimePicker);
  const selectedTimeOption = useSelector(selectSelectedTimeOption);
  const currentIndex = useSelector(selectCurrentIndex);
  const dropdownRef = useRef(null);
  const timeOptions = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(toggleTimePicker());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTimePicker = () => {
    dispatch(toggleTimePicker());
  };

  const handleTimeOptionClick = (timeOption) => {
    dispatch(setSelectedTimeOption(timeOption));
    dispatch(toggleTimePicker());
  };

  // const handleScroll = (event: React.WheelEvent<HTMLUListElement>) => {
  //   if (event.deltaY > 0 && currentIndex < timeOptions.length - 1) {
  //     dispatch(setCurrentIndex(currentIndex + 1));
  //   } else if (event.deltaY < 0 && currentIndex > 0) {
  //     dispatch(setCurrentIndex(currentIndex - 1));
  //   }
  // };

  return (
    <div className={css.timePiker}>
      <input
        type="text"
        className={css.timeInput}
        placeholder="00:00"
        readOnly
        value={selectedTimeOption}
      />
      <button className={css.timeIcon} onClick={handleTimePicker}>
        <WiTime4 size={20} />
      </button>

      {isToggleTimePicker && (
        <div className={css.timeDropdown} ref={dropdownRef}>
          <div className={css.dropdownHeader}>Meeting time</div>

          <ul className={css.timeOptions}>
            {timeOptions &&
              timeOptions.map((timeOption, i) => {
                return (
                  <li
                    className={clsx(css.timeOption, {
                      [css.timeOptionActive]: selectedTimeOption === timeOption,
                    })}
                    key={i}
                    onClick={() => handleTimeOptionClick(timeOption)}
                  >
                    {timeOption}
                  </li>
                );
              })}
          </ul>

          {/* <ul className={css.timeOptions}>
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
          </ul> */}
        </div>
      )}
    </div>
  );
}
