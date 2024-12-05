import css from "../UserMenu/UserMenu.module.css";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/users/operations";
import { selectUserName } from "../../redux/users/selectors";

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  console.log(userName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrap}>
      <div className={css.wrap}>
        <svg className={css.iconPerson}>
          <use href={`${sprite}#icon-person`}></use>
        </svg>
        <p>{userName}</p>
      </div>
      <Button onClick={handleLogout} className={css.button} type="button">
        Log out
      </Button>
    </div>
  );
}
