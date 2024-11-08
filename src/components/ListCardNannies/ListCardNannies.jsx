// import { selectNannies } from "../../redux/nannies/selectors";
import CardNanny from "../CardNanny/CardNanny";
import data from "../../firebase/data.json";

export default function ListCardNannies() {
  //   const nannies = useSelector(selectNannies);

  console.log(data);

  return (
    <ul>
      {data && data.length > 0 ? (
        data.map((el) => (
          <li key={el.id}>
            <CardNanny nanny={el} />
          </li>
        ))
      ) : (
        <li>Nannies not found.</li>
      )}
    </ul>
  );
}
