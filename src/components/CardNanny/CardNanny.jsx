import sprite from "../../images/sprite.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Reviews from "../Reviews/Reviews";
import css from "../CardNanny/CardNanny.module.css";
import clsx from "clsx";

export default function CardNanny({ nanny }) {
  return (
    <div className={clsx(css.wrapper, css.flex)}>
      <div className={css.imgWrapp}>
        <img className={css.img} src={nanny.avatar_url} alt="photo nanny's" />
      </div>
      <div>
        <div className={clsx(css.flex, css.block1)}>
          <div>
            <p>Nanny</p>
            <p>{nanny.name}</p>
          </div>
          <div className={clsx(css.flex, css.block3)}>
            <div className={clsx(css.flex, css.block2)}>
              <div className={clsx(css.flex, css.location)}>
                <HiOutlineLocationMarker className={css.icon} />
                <p>{nanny.location}</p>
              </div>
              <div className={clsx(css.flex, css.location)}>
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
                <p>Rating: {nanny.rating}</p>
              </div>
              <div>
                <p>Price/1 hour: {nanny.price_per_hour}$</p>
              </div>
            </div>
            <div>
              <svg className={css.iconHeart}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
        </div>

        <div className={clsx(css.flex, css.block4)}>
          <div className={css.param}>Age:{nanny.birthday}</div>
          <div className={css.param}>Kids ade: {nanny.kids_age}</div>
          <div className={css.param}>Experience: {nanny.experience}</div>
          <div className={css.param}>
            Characters:
            {nanny.characters.map((el, i) => (
              <span key={i}>{el}, </span>
            ))}
          </div>
          <div className={css.param}>Education: {nanny.education}</div>
        </div>
        <div>{nanny.about}</div>
        <Reviews />
        <button type="button">Read more</button>
      </div>
    </div>
  );
}
