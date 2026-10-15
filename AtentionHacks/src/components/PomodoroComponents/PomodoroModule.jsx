import styles from "../PomodoroComponents/styles/PomodoroModule.module.css"

function PomodoroModule({pomodoroStructure, onSelect}){
    return(
        <>
            <button className={styles.pomodoroCard} type="button" onClick={onSelect}>
                <h2 className={styles.pomodoroTitle}>{`${pomodoroStructure.activeTime}/${pomodoroStructure.restTime}`}</h2>
                <p className={styles.pomodoroDescription}>
                    {pomodoroStructure.activeTime} min de trabajo
                    <br />
                    {pomodoroStructure.restTime} min de descanso
                </p>
            </button>
        </>
    )
}

export default PomodoroModule