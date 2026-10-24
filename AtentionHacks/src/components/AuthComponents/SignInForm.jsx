import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import styles from "../AuthComponents/styles/AuthFormStyles.module.css"

function SignInForm(){

    const navigate = useNavigate();
    const {login} = useAuth();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        setError("");
        setMessage("");
        setIsLoading(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const credentials = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try{
            const response = await fetch(
                "http://127.0.0.1:8000/api/auth/login/",
                {
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                }
            );
            const data = await response.json();

            if(!response.ok){
                throw new Error(
                    "Correo o contraseña incorrectos."
                );
            }
            login(data);
            form.reset();


            navigate("/", {replace: true});
        } catch(err){
            setError(
                err instanceof Error
                ? err.message
                : "No se pudo conectar con el servidor."
            );
        } finally {
            setIsLoading(false);
        }
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
                {error && (
                    <p role="alert" className={styles.error}>
                        {error}
                    </p>
                )}
                {message && (
                    <p role="status" className={styles.success}>
                        {message}
                    </p>
                )}
                <button className={styles.submitButton} type="submit" disabled={isLoading}>
                    {isLoading ? "Ingresando..." : "Ingresar"}
                </button>
                <a className={styles.link} href="/forgot-password">Olvidé mi contraseña</a>
            </form>
        </>
    )
}

export default SignInForm