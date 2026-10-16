function SignUpForm(){
    return(
        <>
            <form action="">
                <label htmlFor="emailSignUp">Ingresa tu correo electrónico</label>
                <input id="emailSignUp" type="email" />
                <label htmlFor="passwordSignUp">Ingresa tu contraseña</label>
                <input id="passwordSignUp" type="password" />
                <button>
                    Confirmar Correo
                </button>
            </form>
        </>
    )
}

export default SignUpForm