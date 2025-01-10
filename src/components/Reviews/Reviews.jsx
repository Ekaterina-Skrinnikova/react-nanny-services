import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../Reviews/Reviews.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { openModalMakeAppointment } from "../../redux/modal/slice";
import { setSavedNanny } from "../../redux/nannies/slice";

export default function Reviews({ nanny }) {
  const dispatch = useDispatch();
  const responses = nanny.reviews;

  const handleOpenModalMakeAppointment = (nanny) => {
    dispatch(setSavedNanny(nanny));
    dispatch(openModalMakeAppointment());
  };

  return (
    <div className={css.wrapper}>
      {responses && Object.values(responses).length > 0 ? (
        Object.values(responses).map((item, i) => (
          <div key={i} className={clsx(css.flex, css.block0)}>
            <div className={clsx(css.flex, css.block1)}>
              <div className={clsx(css.flex, css.block2)}>
                {item.reviewer !== "string" && String(item.reviewer).charAt(0)}
              </div>
              <div>
                <p>{item.reviewer}</p>
                <div className={clsx(css.flex, css.block3)}>
                  <svg className={css.icon}>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  <p>{item.rating}</p>
                </div>
              </div>
            </div>
            <p className={css.text}>{item.comment}</p>
          </div>
        ))
      ) : (
        <div>Reviews is not founded</div>
      )}
      <Button
        type="submit"
        className={css.btn}
        onClick={() => handleOpenModalMakeAppointment(nanny)}
      >
        Make an appointment
      </Button>
    </div>
  );
}
