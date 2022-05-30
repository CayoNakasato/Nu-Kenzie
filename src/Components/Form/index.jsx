import { useState } from "react";
import style from "./style.module.css";

function Form({ listTransactions, setListTransactions, setFilteredBills}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [option, setOption] = useState("Entrada");

  function addTransaction(e) {
    e.preventDefault();
    if (option === "Entrada") {
      const newTransaction = {
        description,
        option,
        value: +value,
      };
      setListTransactions([...listTransactions, newTransaction]);
    } else if (option === "Saída") {
      const newTransaction = {
        description,
        option,
        value: -value,
      };
      setListTransactions([...listTransactions, newTransaction]);
    }
  }

  return (
    <>
      <div className={style.container}>
        <label className={style.inputLabelDescription}>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.inputDescription}
        />
        <p className={style.inputDescriptionSub}>Ex:compras de roupa</p>
        <div className={style.inputBoxInfoValue}>
          <div className={style.inputBoxValue}>
            <label className={style.inputBoxValueText}>Valor</label>
            <input
              type="number"
              placeholder="R$1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={style.inputValue}
            />
          </div>
          <div className={style.inputBoxTypeValue}>
            <label className={style.inputBoxTypeValueText}>Tipo de valor</label>
            <select
              name="options"
              id="type"
              onChange={(e) => setOption(e.target.value)}
              className={style.inputValue}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit" onClick={(e) => addTransaction(e)} className={style.inputAddValue}> 
          Inserir Valor
        </button>
      </div>
    </>
  );
}

export default Form;
