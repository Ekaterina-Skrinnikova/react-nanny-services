import InputTimePiker from "../../components/InputTimePiker/InputTimePiker";
import ListFaivoritesNannies from "../../components/ListFaivoritesNannies/ListFaivoritesNannies";
import css from "../FavoritesPage/FavoritesPage.module.css";

export default function FavoritesPage() {
  const timeOptions = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];

  return (
    <div className="container">
      <div className={css.wrapper}>
        <ListFaivoritesNannies />
        <InputTimePiker options={timeOptions} />
      </div>
    </div>
  );
}
