import styles from "../components/PomodoroComponents/styles/PomodoroStyles.module.css"
import HomeButton from "../components/HomeComponents/HomeButton"
import PomodoroModule from "../components/PomodoroComponents/PomodoroModule"
import PomodoroModal from "../components/PomodoroComponents/PomodoroModal"
import  { useEffect, useState } from "react";



function Pomodoro(){

    const [pomodoros, setPomodoro] = useState(() => {

        try {
            const savedPomodoros =  localStorage.getItem("myPomodoro")

            return savedPomodoros
            ? JSON.parse(savedPomodoros)
            : [
                {
                    id: crypto.randomUUID(),
                    activeTime: 25,
                    restTime: 5,
                },
                {
                    id: crypto.randomUUID(),
                    activeTime: 45,
                    restTime: 15,
                },
                {
                    id: crypto.randomUUID(),
                    activeTime: 50,
                    restTime: 10,
                }
            ];
        } catch {
            return [];
        }
    });

    const [selectedPomodoro, setSelectedPomodoro] = useState(null);
    const [usingPomodoro, setUsingPomodoro] = useState(null);


    return(
        <>
            <h1 className={styles.pageTitle}>Pomodoro</h1>
            {usingPomodoro && 
                <PomodoroModal 
                    selectedPomodoro={selectedPomodoro}
                    usingPomodoro = {usingPomodoro}
                    setUsingPomodoro={setUsingPomodoro}
                    onClose={() => {setSelectedPomodoro(null); setUsingPomodoro(null);}}
                />
            }
            <div className={styles.pomodoroOptions}>
                {pomodoros.map((pomodoro) => (
                    <PomodoroModule
                        key={pomodoro.id}
                        pomodoroStructure={pomodoro}
                        onSelect={() => {
                            setSelectedPomodoro(pomodoro);
                            setUsingPomodoro("setSessions");
                        }}
                    />
                ))}
            </div>
            <HomeButton />
        </>
    )
}

export default Pomodoro