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
  const alarmsSection = document.querySelector('.alarms');


  useEffect(() => {
  if (isCreatingAlarm) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
  } else {
     document.body.style.overflow = '';
      document.body.style.pointerEvents = 'auto';
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
      {isCreatingAlarm && <AlarmModal 
      
      editingAlarm={editingAlarm} 

      onSave={
        
        (newAlarm)=> {
          if(editingAlarm == null){          
          setAlarms(prevAlarms => [...prevAlarms,newAlarm]); setEditingAlarm(null);
          } else {
            setAlarms(prevAlarms => 
              prevAlarms.map(alarm =>
            newAlarm.id === alarm.id 
            ? newAlarm
            : alarm
          )); 
          setEditingAlarm(null);
        }}}
        onClose={() => {setIsCreatingAlarm(false); setEditingAlarm(null);} }/>
      }
      <div className={styles.alarms}>
        {alarms.map((alarm) => (
          <Alarm key={alarm.id} name={alarm.alarmName} time={alarm.alarmTime} repeat={alarm.repeatMode}
          isEditing={() => {setEditingAlarm(alarm); setIsCreatingAlarm(true);}}
          deleteAlarm={() => {
            setAlarms(prevAlarms => 
              prevAlarms.filter(noDeletedAlarm =>
            noDeletedAlarm.id !== alarm.id 
          ))}}
          />
          
           
        ))}
      </div>
      <HomeButton/>
      </div>
    </>
  )
}

export default Alarms