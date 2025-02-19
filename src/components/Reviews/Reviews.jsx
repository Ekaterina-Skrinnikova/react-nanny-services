import clsx from "clsx";
import sprite from "../../images/sprite.svg";
import css from "../Reviews/Reviews.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModalMakeAppointment } from "../../redux/modal/slice";
import { setSavedNanny } from "../../redux/nannies/slice";
import { selectIsLoggedIn } from "../../redux/users/selectors";
import Notice from "../Notice/Notice";
import { useState } from "react";

export default function Reviews({ nanny }) {
  const dispatch = useDispatch();
  const responses = nanny.reviews;
  const [showMessage, setShowMessage] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleOpenModalMakeAppointment = (nanny) => {
    if (!isLoggedIn) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      dispatch(setSavedNanny(nanny));
      dispatch(openModalMakeAppointment());
    }
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

      <div className={css.showMessage}>
        <Button
          type="submit"
          className={css.btn}
          onClick={() => handleOpenModalMakeAppointment(nanny)}
        >
          Make an appointment
        </Button>

        {showMessage && (
          <Notice>The service is available to authorized users</Notice>
        )}
      </div>
    </div>
  );
}
