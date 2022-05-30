import { FaTrash } from "react-icons/fa";
import style from "./style.module.css"

function Card({ transaction, handleBills }) {
  return (
    <>
    {
      transaction.option === "Entrada" ? 
    (
      <li className={style.itemListGreen}>
          <div className={style.infoBoxOne}>
              <h2 className={style.description}>{transaction.description}</h2>
              <span className={style.option}>{transaction.option}</span>
          </div>
          <div className={style.infoBoxTwo}>
              <span className={style.value}>${transaction.value}</span>
              <button className={style.btnDelete} onClick={() => handleBills(transaction)}>
                  <FaTrash />
              </button>
          </div>
      </li>
    ):
    (
      <li className={style.itemListRed}>
      <div className={style.infoBoxOne}>
          <h2 className={style.description}>{transaction.description}</h2>
          <span className={style.option}>{transaction.option}</span>
      </div>
      <div className={style.infoBoxTwo}>
          <span className={style.value}>$ {transaction.value}</span>
          <button className={style.btnDelete} onClick={() => handleBills(transaction)}>
              <FaTrash />
          </button>
      </div>
  </li>
    )

    }
    </>
  );
}

export default Card;
