import Alarm from "../components/AlarmsComponents/Alarm"
import AlarmModal from "../components/AlarmsComponents/AlarmModalComponents/AlarmModal";
import NewAlarmButton from "../components/AlarmsComponents/NewAlarmButton/NewAlarmButton";
import HomeButton from "../components/HomeComponents/HomeButton";
import { useState, useEffect } from "react"
import styles from "../components/AlarmsComponents/AlarmsStyles/AlarmsStyles.module.css"

function Alarms() {

  const [isCreatingAlarm, setIsCreatingAlarm] = useState(false);
  const [editingAlarm, setEditingAlarm] = useState(null);
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
  if (isCreatingAlarm) {
      document.body.style.overflow = 'hidden';
  } else {
     document.body.style.overflow = '';
  }

    return () => {
      document.body.style.overflow= '';
    }

}, [isCreatingAlarm])



  return (
    <>
      <h1 className={styles.title}>Alarms</h1>
      <div className={styles.alarmsSection}>
      <NewAlarmButton onClick={() => {setIsCreatingAlarm(true); setEditingAlarm(null);}}/>
      {isCreatingAlarm && <AlarmModal onSave={
          (alarm)=> {setAlarms([...alarms,alarm]); setEditingAlarm(null);}
        }
        editingAlarm={editingAlarm} 
        onClose={() => {setIsCreatingAlarm(false); setEditingAlarm(null);} }/>
      }
      <div className={styles.alarms}>
        {alarms.map((alarm) => (
          <Alarm key={alarm.id} name={alarm.alarmName} time={alarm.alarmTime} repeat={alarm.repeatMode}
          isEditing={()=> {setEditingAlarm(alarm); setIsCreatingAlarm(true);}}
          />
          
           
        ))}
      </div>
      <HomeButton/>
      </div>
    </>
  )
}

export default Alarms