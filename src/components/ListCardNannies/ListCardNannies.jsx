import { useSelector } from "react-redux";
import { selectNannies } from "../../redux/nannies/selectors.js";
import CardNanny from "../CardNanny/CardNanny";

export default function ListCardNannies() {
  const nannies = useSelector(selectNannies);

  return (
    <ul>
      {nannies && nannies.length > 0 ? (
        nannies.map((nanny, i) => (
          <li key={i}>
            <CardNanny nanny={nanny} />
          </li>
        ))
      ) : (
        <li>Nannies not found.</li>
      )}
    </ul>
  );
}
