import { useDispatch, useSelector } from "react-redux";
import { HiOutlineLocationMarker } from "react-icons/hi";
import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../CardNanny/CardNanny.module.css";
import Reviews from "../Reviews/Reviews";
import { expanded } from "../../redux/nannies/slice.js";
import { selectIsExpanded } from "../../redux/nannies/selectors.js";

export default function CardNanny({ nanny }) {
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
                <span>{title}: </span>
                {arrayDescrips[i] === "birthday"
                  ? getAge(nanny[arrayDescrips[i]])
                  : nanny[arrayDescrips[i]]}
              </li>
            );
          })}
        </ul>

        {/* <div className={clsx(css.flex, css.block4)}>
          <div className={css.param}>
            <span>Age: </span>
            {getAge(nanny.birthday)}
          </div>
          <div className={css.param}>
            <span>Kids age:</span> {nanny.kids_age}
          </div>
          <div className={css.param}>
            <span>Experience:</span> {nanny.experience}
          </div>
          <div className={css.param}>
            <span>Characters: </span>
            {nanny.characters.map((el, i) => (
              <span key={i}>{el}, </span>
            ))}
          </div>
          <div className={css.param}>
            <span>Education: </span>
            {nanny.education}
          </div>
        </div> */}

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
    </div>
  );
}
