import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";
import Button from "../Button/Button.jsx";
// import { selectSelectedItem } from "../../redux/modal/selectors.js";
// import { getNannies } from "../../redux/nannies/operations.js";
import {
  selectNannies,
  selectPage,
  // selectPerPage,
} from "../../redux/nannies/selectors.js";
import { setPage } from "../../redux/nannies/slice.js";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const page = useSelector(selectPage);
  // const option = useSelector(selectSelectedItem);
  // const perPage = useSelector(selectPerPage);

  // console.log(nannies);
  // console.log(page);

  const handleLoadMoreClick = () => {
    // console.log("statr");
    dispatch(setPage(page + 1));
  };

  // const isLoadAll = nannies.length === nanniesAll.length;

  return (
    <div className={css.wrapper}>
      <ul>
        {nannies && nannies.length > 0 ? (
          nannies.map((nanny, i) => (
            <li className={css.space} key={i}>
              <CardNanny nanny={nanny} />
            </li>
          ))
        ) : (
          <li>Nannies is not founded.</li>
        )}
      </ul>

      <Button
        // className={clsx(!isLoadAll ? css.btn : "visually-hidden")}
        type="button"
        onClick={handleLoadMoreClick}
      >
        Load more
      </Button>
    </div>
  );
}
