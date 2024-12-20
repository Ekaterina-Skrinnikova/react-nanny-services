import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLocationMarker } from "react-icons/hi";
import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../CardNanny/CardNanny.module.css";
import Reviews from "../Reviews/Reviews";
import { expanded } from "../../redux/nannies/slice.js";
import { selectIsExpanded } from "../../redux/nannies/selectors.js";
import { selectIsOpenModalMakeAppointment } from "../../redux/modal/selectors.js";
import MakeAppointmentForm from "../MakeAppointmentForm/MakeAppointmentForm.jsx";

export default function CardNanny({ nanny }) {
  const isOpenModalMakeAppointment = useSelector(
    selectIsOpenModalMakeAppointment
  );
  const arrayTitles = [
    "Age",
    "Kids age",
    "Experience",
    "Characters",
    "Education",
  ];
  const arrayDescrips = [
    "birthday",
    "kids_age",
    "experience",
    "characters",
    "education",
  ];
  const dispatch = useDispatch();
  const isExpanded = useSelector(selectIsExpanded);

  const handleReadMoreClick = () => {
    dispatch(expanded());
  };

  const getAge = (birthday) => {
    const birthDateString = birthday;
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() >= birthDate.getDate())
    ) {
      age -= 1;
    }

    return age;
  };

  return (
    <div className={clsx(css.wrapper, css.flex)}>
      <div className={css.imgWrapp}>
        <img className={css.img} src={nanny.avatar_url} alt="photo nanny's" />
        <svg className={css.iconGreenDot}>
          <use href={`${sprite}#icon-green-dot`}></use>
        </svg>
      </div>
      <div>
        <div className={clsx(css.flex, css.block1)}>
          <div>
            <p className={css.text}>Nanny</p>
            <p className={css.name}>{nanny.name}</p>
          </div>
          <div className={clsx(css.flex, css.block3)}>
            <div className={clsx(css.flex, css.block2)}>
              <div className={clsx(css.flex, css.location)}>
                <HiOutlineLocationMarker className={css.icon} />
                <p className={css.locationText}>{nanny.location}</p>
              </div>
              <div className={clsx(css.flex, css.location)}>
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
                <p className={css.locationText}>Rating: {nanny.rating}</p>
              </div>
              <div>
                <p className={css.locationText}>
                  Price/1 hour: <span>{nanny.price_per_hour}$</span>
                </p>
              </div>
            </div>
            <div>
              <svg className={css.iconHeart}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
        </div>

        <ul className={clsx(css.flex, css.block4)}>
          {arrayTitles.map((title, i) => {
            return (
              <li className={css.param} key={i}>
                <span className={css.title}>{title}: </span>
                {arrayDescrips[i] === "birthday" ? (
                  <span className={css.age}>
                    {getAge(nanny[arrayDescrips[i]])}
                  </span>
                ) : arrayDescrips[i] === "characters" ? (
                  nanny[arrayDescrips[i]].map((el, index) => {
                    if (index < nanny[arrayDescrips[i]].length - 1) {
                      return (
                        el.charAt(0).toUpperCase() + el.slice(1) + "," + " "
                      );
                    }
                    return el.charAt(0).toUpperCase() + el.slice(1);
                  })
                ) : (
                  nanny[arrayDescrips[i]]
                )}
              </li>
            );
          })}
        </ul>

        <div className={css.about}>{nanny.about}</div>

        {isExpanded && <Reviews nanny={nanny} />}

        <button
          className={clsx(isExpanded ? "visually-hidden" : css.btn)}
          type="button"
          onClick={handleReadMoreClick}
        >
          Read more
        </button>
      </div>
      {isOpenModalMakeAppointment && <MakeAppointmentForm nanny={nanny} />}
    </div>
  );
}
