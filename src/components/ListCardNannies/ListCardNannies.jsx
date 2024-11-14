import { useDispatch, useSelector } from "react-redux";
import {
  selectLastVisibleKey,
  selectNannies,
  selectPerPage,
} from "../../redux/nannies/selectors.js";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";
import Button from "../Button/Button.jsx";
import { getNextPage } from "../../redux/nannies/operations.js";
import clsx from "clsx";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const perPage = useSelector(selectPerPage);
  const lastVisibleKey = useSelector(selectLastVisibleKey);
  // console.log(nannies);

  const handleLoadMoreClick = () => {
    dispatch(getNextPage({ lastVisibleKey, perPage }));
  };
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
        className={clsx(lastVisibleKey ? css.btn : "visually-hidden")}
        type="button"
        onClick={handleLoadMoreClick}
      >
        Load more
      </Button>
    </div>
  );
}
