import style from "./style.module.css";
function Header({setLoggedIn}) {

  function handleLogout(){
    setLoggedIn(false)
  }
  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.headerTitleContainer}>
          <h1 className={style.titleNameOne}>Nu</h1>
          <h1 className={style.titleNameTwo}>Kenzie</h1>
        </div>

        <button onClick={handleLogout} className={style.headerBtn}>Início</button>
      </div>
    </>
  );
}

export default Header;
