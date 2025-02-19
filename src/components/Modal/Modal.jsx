import { useDispatch } from "react-redux";
import { useEffect } from "react";
import clsx from "clsx";
import css from "../Modal/Modal.module.css";
import sprite from "../../assets/images/sprite.svg";

export default function Modal({ children, modalClose, className }) {
  const dispatch = useDispatch();

  const handleCloseBackdrop = (e) => {
    if (e.target.id === "backdrop") {
      closeModal();
    }
  };

  const handleCloseEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch(modalClose);
  };

  useEffect(() => {
    const backdrop = document.getElementById("backdrop");

    backdrop.addEventListener("click", handleCloseBackdrop);
    document.addEventListener("keydown", handleCloseEscape);
    return () => {
      backdrop.removeEventListener("click", handleCloseBackdrop);
      document.removeEventListener("keydown", handleCloseEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={css.backdrop} id="backdrop">
      <div className={clsx(css.wrapper, className)}>
        <button className={css.btnClose} onClick={closeModal}>
          <svg className={css.iconClose}>
            <use href={`${sprite}#icon-x`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
