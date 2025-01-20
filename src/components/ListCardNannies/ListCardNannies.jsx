import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLastVisibleKey,
  selectNannies,
  selectNanniesAll,
  selectPerPage,
} from "../../redux/nannies/selectors.js";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";
import Button from "../Button/Button.jsx";
import { selectSelectedItem } from "../../redux/modal/selectors.js";
import { buildQuery } from "../../redux/nannies/operations.js";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const nanniesAll = useSelector(selectNanniesAll);
  const perPage = useSelector(selectPerPage);
  const lastVisibleKey = useSelector(selectLastVisibleKey);
  const option = useSelector(selectSelectedItem);

  // console.log("lastVisibleKey=list", lastVisibleKey);
  // console.log(nanniesAll);
  // console.log(option);

  const handleLoadMoreClick = () => {
    // console.log("statr");
    dispatch(buildQuery({ lastVisibleKey, perPage, option }));
  };

  const isLoadAll = nannies.length === nanniesAll.length;

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
        className={clsx(!isLoadAll ? css.btn : "visually-hidden")}
        type="button"
        onClick={handleLoadMoreClick}
      >
        Load more
      </Button>
    </div>
  );
}
