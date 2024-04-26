import Item from "./Item";
import "./Transaction.css";
import DataContext from "../../../data/DataContext";
import { useContext } from "react";


const Transaction = (props) => {
  const { items } = props;
  const name = useContext(DataContext)

  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      {name}
    </div>
  );
};

export default Transaction;
