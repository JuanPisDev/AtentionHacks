function SignInForm(){

    function handleSubmit(){
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailSignIn">
                    Correo Electrónico
                </label>
                <input id="emailSignIn" type="email" name="email" autoComplete="email" required/>
                <label htmlFor="passwordSignIn">
                    Contraseña
                </label>
                <input id="passwordSignIn" name="password" type="password" autoComplete="current-password" required/>
                <button type="submit">
                    Ingresar
                </button>
                <a href="/forgot-password">Olvidé mi contraseña</a>
            </form>
        </>
    )
}

export default SignInForm