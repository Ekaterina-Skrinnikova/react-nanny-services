import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import CardNanny from "../CardNanny/CardNanny";
import css from "../ListCardNannies/ListCardNannies.module.css";
import Button from "../Button/Button.jsx";
import {
  selectCountNannies,
  selectNannies,
  selectPage,
} from "../../redux/nannies/selectors.js";
import { setPage } from "../../redux/nannies/slice.js";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const page = useSelector(selectPage);
  const countNannies = useSelector(selectCountNannies);

  const handleLoadMoreClick = () => {
    dispatch(setPage(page + 1));
  };

  const isLoadAll = nannies.length === countNannies;

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
