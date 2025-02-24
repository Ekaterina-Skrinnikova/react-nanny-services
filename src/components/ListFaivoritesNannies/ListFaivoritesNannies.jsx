import { useSelector } from "react-redux";
import {
  selectFaivoritesListNannies,
  selectNannies,
} from "../../redux/nannies/selectors";
import CardNanny from "../CardNanny/CardNanny";
import css from "../../components/ListFaivoritesNannies/ListFaivoritesNannies.module.css";

export default function ListFaivoritesNannies() {
  const listFaivoritesNannies = useSelector(selectFaivoritesListNannies);
  const nannies = useSelector(selectNannies);
  console.log(listFaivoritesNannies);

  return (
    <div className={css.wrapper}>
      <ul>
        {nannies.length > 0 ? (
          nannies
            .filter(
              (nanny) => nanny && listFaivoritesNannies.includes(nanny.id)
            )
            .map((nanny) => (
              <li className={css.space} key={nanny.id}>
                <CardNanny nanny={nanny} />
              </li>
            ))
        ) : (
          <li>Nannies are not found.</li>
        )}
      </ul>
    </div>
  );
}
