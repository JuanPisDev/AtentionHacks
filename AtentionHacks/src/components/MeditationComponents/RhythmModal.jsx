import { useEffect } from "react";

function RhythmModal({rhythm, rhythmTime, setRhythmTime, usingRhythm, setUsingRhythm, onClose}){

    function handleSelectTime() {
        setUsingRhythm("meditating");
    }

    function handleStartMeditation(){
        setRemainingTime(rhythmTime * 60);
        setUsingRhythm("meditation");

    }

    const [remainingTime, setRemainingTime] = useState(0);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    useEffect(() => {
        if (usingRhythm !== "meditating") return;

        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime -1);
        }, 1000);

        return () => clearInterval(interval);
    }, [usingRhythm]);


    return(
        <>
            {usingRhythm === "setTime" && (
                    <>
                        <form action="" 
                        
                        onSubmit={(ev)=>{
                            ev.preventDefault();
                            setUsingRhythm("meditating");
                            onClose();
                        }}>
                            <label htmlFor="">¿Cuanto tiempo quieres meditar?</label>
                            <input 
                            type="number" 
                            min="1" 
                            value={rhythmTime}
                            onChange={ev => setRhythmTime(Number(ev.target.value))} 
                                required
                            />
                            <button 
                            type="submit"
                            >
                                Empezar
                            </button>
                            <button type="button" onClick={onClose}>Cancelar</button>
                        </form>
                    </>
                )}
                {usingRhythm === "meditating" && (
                <>
                    <h2>{rhythm.rhythmTitle}</h2>
                    <div>
                        {String(minutes).padStart(2,"0")};
                        {String(seconds).padStart(2,"0")}
                    </div>
                </>
                )}
        </>
    )

}

export default RhythmModal