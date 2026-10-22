import {useState} from 'react';
import styles from "../AuthComponents/styles/AuthFormStyles.module.css"

function SignUpForm(){

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event){
            event.preventDefault();

            setError("");
            setMessage("");
            setIsLoading(true);

            const form = event.currentTarget;
            const formData = new FormData(form);

            const userData = {
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
            };

            try {
                const response =await fetch(
                    "http://127.0.0.1:8000/api/auth/register",
                    {
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userData),
                    }
                );

                const data = await response.json();

                if(!response.ok){
                    const errorMessages = Object.entries(data)
                    .map(([field, errors]) => {
                        const messages = Array.isArray(errors)
                            ? errors.join(" ")
                            : String(errors);

                        return `${field}: ${messages}`;
                    })
                    .join(" ");

                    throw new Error(
                        errorMessages || "No se pudo crear la cuenta."
                    );
                }
                setMessage("¡Cuenta creada correctamente!");
                form.reset();
            } catch(err){
                setError(
                        err instanceof Error
                        ? err.message
                        : "Ocurrió un error inesperado."
                );
            } finally {
                setIsLoading(false);
            }
        }

    
    return(
        
        <>
            <form 
                onSubmit={handleSubmit} 
                className={styles.form}
            >

                <h2 className={styles.title}>Crea tu cuenta</h2>
                <p className={styles.description}>Empieza a organizar tus tareas y mejorar tu enfoque.</p>
                <label htmlFor="usernameSignUp" className={styles.label}>Nombre de usuario</label>
                <input className={styles.input} id="usernameSignUp" name='username' type="text" autoComplete="username" required/>
                <label className={styles.label} htmlFor="emailSignUp" >Ingresa tu correo electrónico</label>
                <input className={styles.input} id="emailSignUp" type="email" name="email" autoComplete="email" required />
                <label className={styles.label} htmlFor="passwordSignUp">Ingresa tu contraseña</label>
                <input  className={styles.input} id="passwordSignUp" type="password" name="password" autoComplete="new-password" minLength={8} required />
                {error && (
                    <p role='alert' className={styles.error}>
                        {error}
                    </p>
                )}
                {message && (
                    <p role='status' className={styles.success}>
                        {message}
                    </p>
                )}
                <button className={styles.submitButton} type="submit">
                    {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                </button>
            </form>
        </>
    );
}

export default SignUpForm;