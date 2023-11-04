import "./CSS/Todoitems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const Todoitems = ({ no, display, text }) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />
        <div className="todoitems-text"></div>
        {text}
      </div>
      <img src={cross} alt="" />
    </div>
  );
};

export default Todoitems;
