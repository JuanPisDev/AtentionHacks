import {useState} from 'react';
import SignIn from "../components/AuthComponents/SignInForm"
import SignUp from "../components/AuthComponents/SignUpForm"
import styles from "../components/AuthComponents/styles/AuthStyles.module.css"

function Auth(){

    const [action, setAction ] = useState("signIn");

    return(
        <div className={styles.auth}>
            <header className={styles.nav}>
                <p>Bienvenido a <br /><span>Attention</span><span className={styles.spam}>Hacks </span> </p>
            </header>
            <main className={styles.main}>
                    <section className={styles.authSection}>
                        <div className={styles.buttons}>
                            <button  className={styles.signInButton} type="button" onClick={() => setAction("signIn")} aria-pressed={action === "signIn"}>Ingresar</button>
                            <button className={styles.signUpButton} type="button" onClick={() => setAction("signUp")} aria-pressed={action === "signUp"}>Registrarme </button> 
                        </div>
                        <div className={styles.userInfoSection}>
                            <div className={styles.mainLeft}>
                                <p>{action === "signIn" ? "Ingresa a tu cuenta😀" : "Registrate, ¡es muy fácil! 😁"}</p>
                            </div>
                            <div className={styles.mainRight}>
                                {action === "signIn" ? <SignIn /> : <SignUp />}
                            </div>
                        </div>
                    </section>
                
            </main>
            <footer className={styles.footer}>
                <p>Made By @JuanPisDev</p>
            </footer>
            
            
        </ div>
    )
}

export default Auth