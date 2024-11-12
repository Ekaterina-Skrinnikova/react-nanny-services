import { useDispatch } from "react-redux";
import FiltersField from "../../components/FiltersField/FiltersField";
import ListCardNannies from "../../components/ListCardNannies/ListCardNannies";
import { getAllNannies } from "../../redux/nannies/operations.js";
import { useEffect } from "react";

export default function Nannies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNannies());
  }, [dispatch]);

  return (
    <div className="container">
      <FiltersField />
      <ListCardNannies />
    </div>
  );
}
