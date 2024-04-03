import "./DieTwo.css";
function DieTwo({ val, color = "slateblue" }) {
  return (
    <div className="DieTwo" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}

export default DieTwo;
