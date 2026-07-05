import styles from "../AlarmsComponents/AlarmsStyles/Alarm.module.css"

function Alarm({name, time, repeat }) {

  return (
    <>
        <div className={styles.alarm}>
            <h1 className={styles.alarmName}>{name}</h1>
            <h2 className={styles.alarmTime} >{time}</h2>
            <h3 className={styles.alarmRepeat}>Repeat Daily: {repeat}</h3>
            <button className={styles.editButton}>Edit</button>
        </div>      
    </>
  )
}

export default Alarm