import Button from "../../components/Button/Button";
import sprite from "../../images/sprite.svg";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>Make Life Easier for the Family:</h1>
        <p>Find Babysitters Online for All Occasions</p>
        <Button type="button">Get started</Button>
      </div>
      <div>
        <div>
          <div>
            <svg>
              <use href={`${sprite}#icon-chack`}></use>
            </svg>
          </div>
          <div>
            <p>Experienced nannies</p>
            <p>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
