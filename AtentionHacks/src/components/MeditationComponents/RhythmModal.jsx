function RhythmModal({rhythm, rhythmTime, setRhythmTime, setUsingRhythm}){

    return(
        <>
            <div>
                <form action="">
                    <label htmlFor="">¿Cuanto tiempo quieres meditar?</label>
                    <input type="number" min="1" required/>
                    <input type="number" />
                    <button type="submit">Empezar</button>
                    <button type="button" onClick={() => setUsingRhythm(false)}>Cancelar</button>
                </form>
            </div>
        </>
    )

}

export default RhythmModal