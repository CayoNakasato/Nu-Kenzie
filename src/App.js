import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";
import TotalMoney from "./Components/TotalMoney";
import Homepage from "./pages/homepage";
import style from "./style.module.css"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", option: "Entrada", value: 2500 },
    { description: "Conta de luz", option: "Saída", value: -500 },
  ]);

  const [loggedIn, setLoggedIn] = useState(false)

  function handleBills(newBill) {
    const oldPays = listTransactions.filter((item) => item !== newBill);
    setListTransactions(oldPays);
  }
  
  return (
    <>
        {
          loggedIn === false
           ? 
           (
             <Homepage setLoggedIn={setLoggedIn}/>
           )
           :
           (
             <>
                  <Header setLoggedIn={setLoggedIn}/>
                <div className={style.container}>
                  <div className={style.infoBox}>
                    <Form
                      listTransactions={listTransactions}
                      setListTransactions={setListTransactions}
                      />
                    <TotalMoney listTransactions={listTransactions} />
                  </div>
                  <List
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    handleBills={handleBills}
                  />
                </div>
              </>
           )
        }
    </>
  );
}

export default App;
