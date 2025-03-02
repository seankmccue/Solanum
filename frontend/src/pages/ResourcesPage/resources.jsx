import Tools from "./tools.jsx";
import "./resources.css";
import BuySupplies from "./buy_supplies";

function Resources() {
  return (
    <>
      <h2 className="title">TOOLS</h2>
      <Tools />
      <h2 className="title">WHERE TO BUY SUPPLIES</h2>
      <BuySupplies />
    </>
  );
}

export default Resources;
