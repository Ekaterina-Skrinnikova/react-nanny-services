import clsx from "clsx";
import css from "../Button/Button.module.css";

export default function Button({ children, className, ...rest }) {
  return (
    <button className={clsx(css.btnTotal, className)} {...rest}>
      {children}
    </button>
  );
}
