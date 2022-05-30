import Card from "../Card";
import style from "./style.module.css";
import { useState } from "react"

function List({ listTransactions, handleBills}){
  const [filteredBills, setFilteredBills] = useState([]);

  function filterBillsAll(){
    setFilteredBills(listTransactions) 
  }

  function filterBillsEntrys(){
    const filtered = listTransactions.filter((bill) =>{return bill.option === "Entrada"})
    setFilteredBills(filtered) 
  }

  function filterBillsLoss(){
    const filtered = listTransactions.filter((bill) =>{return bill.option === "Saída"})
    setFilteredBills(filtered) 
  }

  return (
    <>
    <div className={style.container}>
        <div className={style.headerList}>
            <h1 className={style.headerTitleList}>Resumo Financeiro</h1>
                <div className={style.filtros}>
                    <button onClick={filterBillsAll} className={style.filtrosAll}>Todos</button>
                    <button onClick={filterBillsEntrys} className={style.filtro}>Entrada</button>
                    <button onClick={filterBillsLoss} className={style.filtro}>Saida</button>
                </div>
        </div>
        <ul className={style.list}>
            {
              filteredBills.length === 0 ?
            listTransactions.map((transaction, index) => (
            <Card
                transaction={transaction}
                handleBills={handleBills}
                key={index}
            />
            ))
            :
            filteredBills.map((transaction, index) => (
              <Card
                  transaction={transaction}
                  handleBills={handleBills}
                  key={index}
              />
              ))
            }
        </ul>
      </div>
    </>
  );
}

export default List;
