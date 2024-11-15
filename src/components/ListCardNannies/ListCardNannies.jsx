import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLastVisibleKey,
  selectNanniesAll,
  selectPerPage,
} from "../../redux/nannies/selectors.js";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";
import Button from "../Button/Button.jsx";
import { getNextPage } from "../../redux/nannies/operations.js";
import { sortedNannies } from "../../redux/nannies/slice.js";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(sortedNannies);
  const nanniesAll = useSelector(selectNanniesAll);
  const perPage = useSelector(selectPerPage);
  const lastVisibleKey = useSelector(selectLastVisibleKey);

  const handleLoadMoreClick = () => {
    dispatch(getNextPage({ lastVisibleKey, perPage }));
  };

  const isLoadAll = nannies.length === nanniesAll.length;

  return (
    <div className={css.wrapper}>
      <ul>
        {nannies && nannies.length > 0 ? (
          nannies.map((nanny) => (
            <li className={css.space} key={nanny.id.id}>
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
