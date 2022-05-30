import imagemHomepage from "../../asserts/imagemHomepage.svg"
import style from "./style.module.css"
function Homepage({setLoggedIn}){

    function handleLogin(){
        setLoggedIn(true)
    }

    return(
        <>
            <div className={style.container}>
                <div className={style.boxInfo}>
                    <div className={style.headerTitleContainer}>
                        <h2 className={style.titleNameOne}>Nu</h2>
                        <h2 className={style.titleNameTwo}>Kenzie</h2>
                    </div>
                    <div className={style.boxTwoInfo}>
                        <h1 className={style.boxTwoText}>Centralize o controle das suas finanças</h1>
                        <p className={style.boxTwoSubText}>de forma rápida e segura</p>
                    </div>
                    <button className={style.btnLogar} onClick={handleLogin}>Iniciar</button>
                </div>
                <div className={style.img}>
                    <img src={imagemHomepage} alt="Imagem ilustrativa do aplicativo"/>
                </div>
            </div>
        </>
    )
}

export default Homepage