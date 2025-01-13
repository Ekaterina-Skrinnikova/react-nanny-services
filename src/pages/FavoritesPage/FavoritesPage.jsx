// import InputTimePiker from "../../components/InputTimePiker/InputTimePiker";
import ListFaivoritesNannies from "../../components/ListFaivoritesNannies/ListFaivoritesNannies";
import css from "../FavoritesPage/FavoritesPage.module.css";

export default function FavoritesPage() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <ListFaivoritesNannies />
        {/* <InputTimePiker /> */}
      </div>
    </div>
  );
}
