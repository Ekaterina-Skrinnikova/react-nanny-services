import CardNanny from "../../components/CardNanny/CardNanny";
import FiltersField from "../../components/FiltersField/FiltersField";

export default function Nannies() {
  return (
    <div className="container">
      <FiltersField />
      <CardNanny />
    </div>
  );
}
