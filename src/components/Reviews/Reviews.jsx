import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectNanny } from "../../redux/nannies/selectors.js";
import { useEffect } from "react";
import { getNannyById } from "../../redux/nannies/operations.js";

export default function Reviews() {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}
