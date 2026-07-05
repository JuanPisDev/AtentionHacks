import Alarm from "../components/AlarmsComponents/Alarm"
import AlarmModal from "../components/AlarmsComponents/AlarmModalComponents/AlarmModal";
import NewAlarmButton from "../components/AlarmsComponents/NewAlarmButton/NewAlarmButton";
import HomeButton from "../components/HomeComponents/HomeButton";
import { useState } from "react"
import styles from "../components/AlarmsComponents/AlarmsStyles/AlarmsStyles.module.css"


function Alarms() {

  const [isCreatingAlarm, setIsCreatingAlarm] = useState(false);
  const [alarms, setAlarms] = useState([]);



  return (
    <>
      <h1 className={styles.title}>Alarms</h1>
      <div className={styles.alarmsSection}>
      <NewAlarmButton onClick={() => setIsCreatingAlarm(true)}/>
      {isCreatingAlarm && <AlarmModal onSave={
          (alarm)=> setAlarms([...alarms,alarm])
        }
      onClose={() => setIsCreatingAlarm(false)}/>}
      <div className={styles.alarms}>
        {alarms.map((alarm) => (
          <Alarm name={alarm.alarmName} time={alarm.alarmTime} repeat={alarm.repeatMode}/>

        ))}
      </div>
      <HomeButton/>
      </div>
    </>
  )
}

export default Alarms