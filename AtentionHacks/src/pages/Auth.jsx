import {useState} from 'react';
import SignIn from "../components/AuthComponents/SignInForm"
import SignUp from "../components/AuthComponents/SignUpForm"
import styles from "../components/AuthComponents/styles/AuthStyles.module.css"

function Auth(){

    const [action, setAction ] = useState("signUp");

    return(
        <>
            
            
            <header>
                <p>Bienvenido a AtentionHacks</p>
            </header>
            <main>
                    <section>
                        <div>
                            <button onClick={() => setAction("signIn")}>Ingresar</button>
                            <button onClick={() => setAction("signUp")}>Registrarme</button>
                        </div>
                        <div className={styles.mainLeft}>
                            <p>{action === "signIn" ? "Ingresa a tu cuenta" : "Registrate es muy fácil :D"}</p>
                        </div>
                        <div className={styles.mainRight}>
                            {action === "signIn" ? <SignIn /> : <SignUp />}
                        </div>
                    </section>
                
            </main>
            <footer>
                Made By @JuanPisDev
            </footer>
            
            
        </>
    )
}

export default Auth