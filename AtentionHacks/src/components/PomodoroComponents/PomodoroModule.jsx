function PomodoroModule({pomodoroStructure, onSelect}){
    return(
        <>
            <button type="button" onClick={onSelect}>
                <h2>{`${pomodoroStructure.activeTime}-${pomodoroStructure.restTime}`}</h2>
            </button>
        </>
    )
}

export default PomodoroModule