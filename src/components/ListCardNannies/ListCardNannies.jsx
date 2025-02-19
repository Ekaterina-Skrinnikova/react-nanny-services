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
import { selectIsLoading } from "../../redux/users/selectors.js";
import Loader from "../../components/Loader/Loader.jsx";

export default function ListCardNannies() {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const page = useSelector(selectPage);
  const countNannies = useSelector(selectCountNannies);
  const isLoading = useSelector(selectIsLoading);

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
          <li>Nannies not founded.</li>
        )}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        !isLoadAll && (
          <Button
            className={css.btn}
            type="button"
            onClick={handleLoadMoreClick}
          >
            Load more
          </Button>
        )
      )}
    </div>
  );
}
