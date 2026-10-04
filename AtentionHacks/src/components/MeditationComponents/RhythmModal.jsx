import { useEffect, useState } from "react";
import styles from "../MeditationComponents/styles/RhythmModalStyles.module.css"

function RhythmModal({rhythm, rhythmTime, setRhythmTime, usingRhythm, setUsingRhythm, onClose}){

    function handleStartMeditation(){
        setRemainingTime(rhythmTime * 60);
        setCurrentPhase("inhale");
        setPhaseTime(rhythm.inhale);
        setUsingRhythm("meditating");

    }

    function getPhaseDuration(phase){
        if(phase === "inhale"){
            return rhythm.inhale;
        }
        if(phase === "holdIn"){
            return rhythm.holdIn;
        }
        if (phase === "exhale"){
            return rhythm.exhale;
        }
        if (phase === "holdOut"){
            return rhythm.holdOut;
        }
    }

    function getBreatheScale(){
     
        if (currentPhase === "inhale"){
            return "scale(1.5)"
        }
        
        if (currentPhase === "exhale"){
            return "scale(1)"
        }
            return "scale(1.5)"   
    }

    function getPhaseName(){
        if (currentPhase === "inhale"){
            return "INHALA"
        }
        if (currentPhase === "holIn"){
            return "MANTÉN";
        }
        if (currentPhase === "exhale"){
            return "EXHALA";
        }
        if (currentPhase === "holdOut"){
            return "MANTÉN";
        }
    }

    function getNextValidPhase(phase){
        let nextIndex = (phase.indexOf(phase) + 1) % phases.length;
        let nextPhase = phases[nextIndex];

        while (getPhaseDuration(nextPhase) === 0){
            nextIndex = (nextIndex + 1) % phases.length;
            nextPhase = phases[nextIndex];
        }

        return nextPhase;
    }
    
    function handleStopMeditation(){
        setUsingRhythm("finished");
        setRemainingTime(0);
        setPhaseTime(0);
    }

    

    const [remainingTime, setRemainingTime] = useState(0);
    const [currentPhase, setCurrentPhase] = useState("inhale");
    const [phaseTime, setPhaseTime] = useState(0);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const phases = ["inhale", "holdIn", "exhale", "holdOut"];
    const currentIndex = phases.indexOf(currentPhase);
    const nextIndex = (currentIndex + 1) % phases.length;
    const nextPhase = phases[nextIndex];

    useEffect(() => {
        if (usingRhythm !== "meditating") return;

        const interval = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime <= 1){
                    setUsingRhythm("finished");
                    return 0;
                }
                return prevTime -1;
            });

        setPhaseTime(prevPhaseTime => {
        if (prevPhaseTime <= 1) {

            const newPhase = getNextValidPhase(currentPhase);

            setCurrentPhase(newPhase);
            return getPhaseDuration(newPhase);
        }

        return prevPhaseTime - 1 ;
    })

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
                            handleStartMeditation();
                            
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
                    <div 
                        className={styles.breatheCircle}
                        style={{
                            transform: getBreatheScale()
                        }}
                    ><p>
                             ● 
                          ●     ● 
                        ●         ● 
                          ●     ●
                             ●
                        </p>
                    </div>
                    <h3>{getPhaseName()}</h3>
                    <div>
                        {String(minutes).padStart(2,"0")}:
                        {String(seconds).padStart(2,"0")}
                    </div>
                    <button
                        type="button"
                        onClick={handleStopMeditation}
                    >
                        Salir
                    </button>
                </>
                )}
                {usingRhythm === "finished" && (
                    <>
                    <h2>Sesión Terminada</h2>
                    <p>Has completado tu meditación, ¡Bien hecho!.</p>
                    <button type="button" onClick={onClose}>
                        Cerrar
                    </button>
                    </>
                )}
        </>
    )

}

export default RhythmModal