import css from "../UserMenu/UserMenu.module.css";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";

export default function UserMenu() {
  return (
    <div className={css.wrap}>
      <div className={css.wrap}>
        <svg className={css.iconPerson}>
          <use href={`${sprite}#icon-person`}></use>
        </svg>
        <p>Name</p>
      </div>
      <Button className={css.button} type="button">
        Log out
      </Button>
    </div>
  );
}
