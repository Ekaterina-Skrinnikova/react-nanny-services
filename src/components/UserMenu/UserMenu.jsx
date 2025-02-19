import css from "../UserMenu/UserMenu.module.css";
import sprite from "../../assets/images/sprite.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/users/operations";
import { selectUserName } from "../../redux/users/selectors";
import { selectImage } from "../../redux/nannies/selectors";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const image = useSelector(selectImage);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    // if (file) {
    //   try {
    //     const userId = auth.currentUser.uid;

    //     // завантажити фото
    //     // створити сховище
    //     const photoRef = ref(storage, `user_photo/${userId}`);
    //     // console.log(photoRef);
    //     // завантажити фото
    //     const snapshot = await uploadBytes(photoRef, file);
    //     // отримати url фото

    //     console.log(snapshot);
    //     const photoURL = await getDownloadURL(snapshot.ref);

    //     // оновити профіль користувача
    //     await updateProfile(auth.currentUser, { photoURL });
    //     console.log("Photo uploaded and profile updated successfully!", auth);
    //   } catch (error) {
    //     console.error("Error handling photo upload:", error);
    //   }
    // }

    if (file) {
      const reader = new FileReader();
      console.log("reader", reader);

      reader.onload = () => {
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
