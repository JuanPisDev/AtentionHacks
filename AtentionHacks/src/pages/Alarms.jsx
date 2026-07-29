import Alarm from "../components/AlarmsComponents/Alarm"
import AlarmModal from "../components/AlarmsComponents/AlarmModalComponents/AlarmModal";
import NewAlarmButton from "../components/AlarmsComponents/NewAlarmButton/NewAlarmButton";
import HomeButton from "../components/HomeComponents/HomeButton";
import { useState, useEffect, useRef } from "react"
import styles from "../components/AlarmsComponents/AlarmsStyles/AlarmsStyles.module.css"
import alarmSound from "../assets/media/alarmSound.mp3";

function Alarms() {

  const [isCreatingAlarm, setIsCreatingAlarm] = useState(false);
  const [editingAlarm, setEditingAlarm] = useState(null);
  const [alarms, setAlarms] = useState(() => {
    try {const savedAlarms = localStorage.getItem('myAlarms');
    return savedAlarms ? JSON.parse(savedAlarms) : [];
  } catch {
    return [];
  }
  });

  //Here i am working on the alarm for the alarms jeje
const audioRef = useRef(new Audio(alarmSound));  
const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {setCurrentTime(new Date());}, 1000);
    return () => clearInterval(timer);
  }, []);

  // const formattedTime = new Intl.DateTimeFormat(navigator.language, {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   hour12: true 
  // }).format(currentTime);

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2,"0");

  const formattedTime = `${hours}:${minutes}`;

  useEffect(() =>{

    audioRef.current.loop = true;
    {alarms.forEach(alarm => {

      if(alarm.repeatMode === "YES" && formattedTime === alarm.alarmTime)
        {
      audioRef.current.play().catch((error) => {
        console.log("The navigator blocked the audio", error);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime=0;
    }
    })}
    
    return () => {
      audioRef.current.pause();
    };
  }, [formattedTime]);

  useEffect(() => {
    localStorage.setItem('myAlarms', JSON.stringify(alarms));
  }, [alarms]);

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
      {isCreatingAlarm && 
      <div className={styles.overlay} 
      onClick={()=> { setIsCreatingAlarm(false); setEditingAlarm(null);}}>
      <AlarmModal 
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
      </div>

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