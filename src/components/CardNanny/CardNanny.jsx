import sprite from "../../images/sprite.svg";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function CardNanny() {
  const parametres = [
    "Age",
    "Expirience",
    "Kids Age",
    "Characters",
    "Education",
  ];
  return (
    <div>
      <div></div>
      <div>
        <div>Nanny</div>
        <div>
          <div>
            <HiOutlineLocationMarker />
            <p>{}</p>
          </div>
          <div>
            <svg>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p>Rating: {}</p>
          </div>
          <div>
            <p>Price/1 hour: {}</p>
          </div>
        </div>
        <div>
          <svg>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </div>
      </div>
      <p>Name{}</p>
      <div>Parameters</div>
      <p>reviews{}</p>
      <button type="button">Read more</button>
    </div>
  );
}
