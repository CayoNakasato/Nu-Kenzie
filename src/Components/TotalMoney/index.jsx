import style from "./style.module.css";

function TotalMoney({ listTransactions }) {
  const totalAmount = listTransactions.reduce((acc, actualAmount) => {
    return acc + actualAmount.value;
  }, 0);

  return (
    <>
      <div className={style.container}>
        <div className={style.priceInfo}>
          <h1 >Valor Total:</h1>
          <h1 className={style.priceTitle}>$ {totalAmount}</h1>
        </div>
        <p className={style.priceInfoSub}>O valor se refere ao saldo</p>
      </div>
    </>
  );
}

export default TotalMoney;
