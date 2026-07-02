import Alarm from "../components/AlarmsComponents/Alarm"
import AlarmModal from "../components/AlarmsComponents/AlarmModalComponents/AlarmModal";
import NewAlarmButton from "../components/AlarmsComponents/NewAlarmButton/NewAlarmButton";
import HomeButton from "../components/HomeComponents/HomeButton";
import { useState } from "react"


function Alarms() {

  const [isCreatingAlarm, setIsCreatingAlarm] = useState(false);
  const [alarms, setAlarms] = useState([]);


  return (
    <>
      <h1>Alarms</h1>
      <NewAlarmButton onClick={() => setIsCreatingAlarm(true)}/>
      {isCreatingAlarm && <AlarmModal onSave={
          (alarm)=> setAlarms([...alarms,alarm])
        }
      onClose={() => setIsCreatingAlarm(false)}/>}
      <div className="alarmsSection">
        {alarms.map((alarm) => (
          <Alarm name={alarm.alarmName} time={alarm.alarmTime} repeat={alarm.repeatMode}/>

        ))}
      </div>
      <HomeButton/>
    </>
  )
}

export default Alarms