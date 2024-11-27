import { useDispatch, useSelector } from "react-redux";
import FiltersField from "../../components/FiltersField/FiltersField";
import ListCardNannies from "../../components/ListCardNannies/ListCardNannies";
import { getAllNannies, getFirstPage } from "../../redux/nannies/operations.js";
import { useEffect } from "react";
import { selectPerPage } from "../../redux/nannies/selectors.js";
import { selectSelectedItem } from "../../redux/modal/selectors.js";

export default function Nannies() {
  const dispatch = useDispatch();
  const perPage = useSelector(selectPerPage);
  const option = useSelector(selectSelectedItem);
  // console.log(perPage);
  // console.log(option);

  useEffect(() => {
    dispatch(getAllNannies());
    dispatch(getFirstPage({ perPage, option }));
  }, [dispatch, option]);

  return (
    <div className="container">
      <FiltersField />
      <ListCardNannies />
    </div>
  );
}
