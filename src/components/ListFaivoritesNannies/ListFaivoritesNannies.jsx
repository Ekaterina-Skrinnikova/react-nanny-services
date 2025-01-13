import { useSelector } from "react-redux";
import {
  selectFaivoritesListNannies,
  selectNanniesAll,
} from "../../redux/nannies/selectors";
import CardNanny from "../CardNanny/CardNanny";
import css from "../../components/ListFaivoritesNannies/ListFaivoritesNannies.module.css";

export default function ListFaivoritesNannies() {
  const listFaivoritesNannies = useSelector(selectFaivoritesListNannies);
  const nanniesAll = useSelector(selectNanniesAll);
  // console.log(listFaivoritesNannies);
  // console.log(nanniesAll);
  return (
    <div className={css.wrapper}>
      <ul>
        {nanniesAll &&
        nanniesAll.length > 0 &&
        listFaivoritesNannies &&
        listFaivoritesNannies.length > 0 ? (
          nanniesAll
            .filter(
              (nanny) => nanny && listFaivoritesNannies.includes(nanny.id)
            )
            .map((nanny) => (
              <li className={css.space} key={nanny.id}>
                {nanny && <CardNanny nanny={nanny} />}
              </li>
            ))
        ) : (
          <li>Nannies are not found.</li>
        )}
      </ul>
    </div>
  );
}
