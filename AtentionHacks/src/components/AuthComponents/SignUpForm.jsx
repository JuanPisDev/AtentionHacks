import styles from "../AuthComponents/styles/AuthFormStyles.module.css"

function SignUpForm(){
    function handleSubmit(event){
            event.preventDefault();
        }
    return(
        
        <>
            <form className={styles.form}>
                <h2 className={styles.title}>Crea tu cuenta</h2>
                <p className={styles.description}>Empieza a organizar tus tareas y mejorar tu enfoque.</p>
                <label className={styles.label} htmlFor="emailSignUp" >Ingresa tu correo electrónico</label>
                <input className={styles.input} id="emailSignUp" type="email" name="email" autoComplete="email" required />
                <label className={styles.label} htmlFor="passwordSignUp">Ingresa tu contraseña</label>
                <input  className={styles.input} id="passwordSignUp" type="password" name="password" autoComplete="new-password" required />
                <button className={styles.submitButton} type="submit">
                    Confirmar Correo
                </button>
            </form>
        </>
    )
}

export default SignUpForm;