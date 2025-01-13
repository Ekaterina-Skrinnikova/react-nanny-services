import css from "../UserMenu/UserMenu.module.css";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/users/operations";
import { selectUserName } from "../../redux/users/selectors";
import { selectImage } from "../../redux/nannies/selectors";
import { setImage } from "../../redux/nannies/slice";

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const image = useSelector(selectImage);
  // console.log(userName);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // console.log(e.target);
    // console.log(file);

    if (file) {
      const reader = new FileReader();
      // console.log(reader);
      reader.onload = () => {
        // console.log(reader.result);
        dispatch(setImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={css.wrap}>
      <div className={css.wrap}>
        <label htmlFor="file-upload" className={css.uploadLabel}>
          {image ? (
            <img className={css.imgPerson} src={image} alt="user's photo" />
          ) : (
            <svg className={css.iconPerson}>
              <use href={`${sprite}#icon-person`}></use>
            </svg>
          )}
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={css.fileInput}
        />

        <p>{userName}</p>
      </div>
      <Button onClick={handleLogout} className={css.button} type="button">
        Log out
      </Button>
    </div>
  );
}
