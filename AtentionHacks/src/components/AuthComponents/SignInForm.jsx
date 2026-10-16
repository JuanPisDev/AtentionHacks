function SignInForm(){
    return(
        <>
            <form action="">
                <label htmlFor="emailSignUp">
                    Correo Electrónico
                </label>
                <input id="emailSignUp" type="email" />
                <label htmlFor="passwordSignIn">
                    Contraseña
                </label>
                <input id="passwordSignIn" type="password" />
                <button>
                    Ingresar
                </button>
                <a href="">Olvidé mi contraseña</a>
            </form>
        </>
    )
}

export default SignInForm