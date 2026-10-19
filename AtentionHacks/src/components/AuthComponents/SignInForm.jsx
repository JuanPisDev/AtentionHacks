import styles from "../AuthComponents/styles/AuthFormStyles.module.css"

function SignInForm(){

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Ingresa a tu cuenta</h2>
                <p className={styles.description}>Bienvenido de nuevo. Continúa con tus objetivos.</p>
                <label  className={styles.label} htmlFor="emailSignIn">
                    Correo Electrónico
                </label>
                <input  className={styles.input} id="emailSignIn" type="email" name="email" autoComplete="email" required/>
                <label className={styles.label} htmlFor="passwordSignIn">
                    Contraseña
                </label>
                <input className={styles.input} id="passwordSignIn" name="password" type="password" autoComplete="current-password" required/>
                <button className={styles.submitButton} type="submit">
                    Ingresar
                </button>
                <a className={styles.link} href="/forgot-password">Olvidé mi contraseña</a>
            </form>
        </>
    )
}

export default SignInForm