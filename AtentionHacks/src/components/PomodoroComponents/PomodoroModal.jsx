import {useState} from 'react';

function PomodoroModal({selectedPomodoro, usingPomodoro,setUsingPomodoro, onClose}){

    function handleStartPomodoro(ev){
        ev.preventDefault();
        if(sessions === ""  || sessions < 1 || !Number.isInteger(sessions)){
            return;
        }
        setUsingPomodoro("inUse");
    }

    const [sessions, setSessions] = useState(3);

    return(
        <>
            {usingPomodoro === "setSessions" &&
                <>
                    <form inSubmit={handleStartPomodoro}>
                        <h2>
                            Trabajo: {selectedPomodoro.activeTime} 
                            {" "}
                            Descanso: {selectedPomodoro.restTime}
                        </h2>
                            <label htmlFor="sessions">Cantidad de Sesiones</label>
                            <input 
                                id="sessions" 
                                type="number"
                                min="1"
                                step="1"
                                value={sessions}
                                onChange={(ev) => {
                                    const value = ev.target.value;
                                    setSessions(value === "" ? "" : Number(value));
                                }}
                                required
                                />
                            <button type='submit'>INICIAR</button>
                            <button onClick={onClose}>CANCELAR</button>
                    </form>
                </>
            }
            {usingPomodoro === "inUse" && (
                <>
                
                </>
            )

                

            }
        </>
    )
}

export default PomodoroModal