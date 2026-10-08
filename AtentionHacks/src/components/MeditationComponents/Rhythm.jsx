import styles from "../MeditationComponents/styles/RhythmStyles.module.css"


function Rhythm({rhythm, setSelectedRhythm, setUsingRhythm}){

    function handleSelectRhythm() {
        setSelectedRhythm(rhythm);
        setUsingRhythm("setTime");
    }

    return (
        <>
            <button className={styles.rhythmCard} onClick={handleSelectRhythm}>
                <h2 className={styles.rhythmTitle}>  {rhythm.rhythmTitle}</h2>
                <div className={styles.rhythmPattern}>
                    <p>{rhythm.inhale}-{rhythm.holdIn}-{rhythm.exhale}-{rhythm.holdOut}</p>
                </div>
            </button>
        </>
    )
}
export default Rhythm