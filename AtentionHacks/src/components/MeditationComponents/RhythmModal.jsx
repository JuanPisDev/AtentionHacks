import { useEffect, useState } from "react";
import styles from "../MeditationComponents/styles/RhythmModalStyles.module.css"

function RhythmModal({rhythm, rhythmTime, setRhythmTime, usingRhythm, setUsingRhythm, onClose}){

    function handleSelectTime() {
        setUsingRhythm("meditating");
    }

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
                            transform:
                                currentPhase === "inhale"
                                 ? "scale(1.5)"
                                 : currentPhase === "exhale"
                                    ? "scale(1)"
                                    : "scale(1.5)"
                        }}
                    >
                             ●
                          ●     ●
                        ●         ●
                          ●     ●
                             ●
                    </div>
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