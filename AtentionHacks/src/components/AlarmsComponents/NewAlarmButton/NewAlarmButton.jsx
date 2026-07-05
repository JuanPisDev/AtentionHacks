import styles from "../AlarmsStyles/AlarmButton.module.css"


function NewAlarmButton({onClick}) {

  return (
    <>
      <button  className={styles.alarmButton} onClick={onClick}>
          +
      </button>
    </>
  )
}

export default NewAlarmButton