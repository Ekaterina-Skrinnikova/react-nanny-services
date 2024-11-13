import { useSelector } from "react-redux";
import { selectNannies } from "../../redux/nannies/selectors.js";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";

export default function ListCardNannies() {
  const nannies = useSelector(selectNannies);

  return (
    <ul>
      {nannies && nannies.length > 0 ? (
        nannies.map((nanny, i) => (
          <li className={css.wrapper} key={nanny.id.id}>
            <CardNanny nanny={nanny} />
          </li>
        ))
      ) : (
        <li>Nannies is not founded.</li>
      )}
    </ul>
  );
}
