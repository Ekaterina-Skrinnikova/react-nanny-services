import { useDispatch, useSelector } from "react-redux";
import FiltersField from "../../components/FiltersField/FiltersField";
import ListCardNannies from "../../components/ListCardNannies/ListCardNannies";
import { getAllNannies, getFirstPage } from "../../redux/nannies/operations.js";
import { useEffect } from "react";
import { selectPerPage } from "../../redux/nannies/selectors.js";

export default function Nannies() {
  const dispatch = useDispatch();
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    dispatch(getFirstPage(perPage));
    dispatch(getAllNannies());
  }, [dispatch]);

  return (
    <div className="container">
      <FiltersField />
      <ListCardNannies />
    </div>
  );
}
