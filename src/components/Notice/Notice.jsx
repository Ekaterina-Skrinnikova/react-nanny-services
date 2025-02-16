import css from "../Notice/Notice.module.css";

export default function Notice({ children }) {
  return (
    <div className={css.wrap}>
      <p className={css.text}>{children}</p>
    </div>
  );
}
