import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { WiTime4 } from "react-icons/wi";
import css from "../InputTimePiker/InputTimePiker.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  // setSelectedTimeOption,
  // setCurrentIndex,
  // setSelectedTimeOption,
  toggleTimePicker,
} from "../../redux/modal/slice";
import {
  // selectCurrentIndex,
  selectIsToggleTimePicker,
  // selectSelectedTimeOption,
} from "../../redux/modal/selectors";

export default function InputTimePiker({ value, onChange, options }) {
  const dispatch = useDispatch();
  const isToggleTimePicker = useSelector(selectIsToggleTimePicker);
  // const selectedTimeOption = useSelector(selectSelectedTimeOption);
  // const currentIndex = useSelector(selectCurrentIndex);
  const dropdownRef = useRef(null);

  // console.log("isToggleTimePicker", isToggleTimePicker);
  // console.log("value", value);
  // console.log("options", options);
  // console.log("selectedTimeOption", selectedTimeOption);
  // console.log("onChange", onChange);
  // console.log("options", options);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isToggleTimePicker) {
          dispatch(toggleTimePicker());
        }
      }
    };
    if (isToggleTimePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggleTimePicker, dispatch]);

  const handleToggle = () => {
    dispatch(toggleTimePicker());
  };

  const handleOptionClick = (timeOption) => {
    console.log("click", timeOption);
    // onChange(timeOption);
  };

  // console.log("Selected time:", value);
  // console.log("onChange function:", onChange);
  // console.log("options:", options);

  // const handleTimeOptionClick = (timeOption) => {
  //   console.log("Click detected!");
  //   console.log("Selected time:", timeOption);
  //   console.log("onChange function:", onChange);
  //   // dispatch(setSelectedTimeOption(timeOption));
  //   onChange(timeOption);
  // };

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
        value={value}
      />
      <button className={css.timeIcon} onClick={handleToggle} type="button">
        <WiTime4 size={20} />
      </button>

      {isToggleTimePicker && (
        <div className={css.timeDropdown} ref={dropdownRef}>
          <div className={css.dropdownHeader}>Meeting time</div>

          <ul className={css.timeOptions}>
            {options &&
              options.map((timeOption, i) => {
                return (
                  <li
                    className={clsx(css.timeOption, {
                      [css.timeOptionActive]: value === timeOption,
                    })}
                    key={i}
                    onClick={() => handleOptionClick(timeOption)}
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
