function SignUpForm(){
    return(
        <>
            <form >
                <label htmlFor="emailSignUp" >Ingresa tu correo electrónico</label>
                <input id="emailSignUp" type="email" name="email" autoComplete="email" required />
                <label htmlFor="passwordSignUp">Ingresa tu contraseña</label>
                <input id="passwordSignUp" type="password" name="password" autoComplete="new-password" required />
                <button type="submit">
                    Confirmar Correo
                </button>
            </form>
        </>
    )
}

export default SignUpForm