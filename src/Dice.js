import DieTwo from "./DieTwo";
import "./Dice.css";

function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <DieTwo key={i} val={v} color={color} />
      ))}
    </section>
  );
}
export default Dice;
