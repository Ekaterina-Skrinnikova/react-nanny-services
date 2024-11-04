import sprite from "../../images/sprite.svg";

export default function FiltersField() {
  return (
    <div>
      <label htmlFor="filter">Filters</label>
      <input type="text" id="filter" />
      <svg>
        <use href={`${sprite}#icon-chevron-down`}></use>
      </svg>
      <div>
        <p>A to Z</p>
        <p>Z to A</p>
        <p>Less than 10$</p>
        <p>Creater than 10$</p>
        <p>Popular</p>
        <p>Not popular</p>
        <p>Show all</p>
      </div>
    </div>
  );
}
