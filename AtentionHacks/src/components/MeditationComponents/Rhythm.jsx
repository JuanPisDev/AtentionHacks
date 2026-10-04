function Rhythm({rhythm, setSelectedRhythm, setUsingRhythm}){

    function handleSelectRhythm() {
        setSelectedRhythm(rhythm);
        setUsingRhythm("setTime");
    }

    return (
        <>
            <button onClick={handleSelectRhythm}>
                <h2>{rhythm.rhythmTitle}</h2>
                <div>
                    <p>{rhythm.inhale}-{rhythm.holdIn}-{rhythm.exhale}-{rhythm.holdOut}</p>
                </div>
            </button>
        </>
    )
}
export default Rhythm