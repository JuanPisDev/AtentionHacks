import Alarm from "../components/AlarmsComponents/Alarm"
import AlarmModal from "../components/AlarmsComponents/AlarmModalComponents/AlarmModal";
import NewAlarmButton from "../components/AlarmsComponents/NewAlarmButton/NewAlarmButton";
import HomeButton from "../components/HomeComponents/HomeButton";
import { useState } from "react"


function Alarms() {

  const [isCreatingAlarm, setIsCreatingAlarm] = useState(false);

  return (
    <>
      <h1>Alarms</h1>
      <NewAlarmButton onClick={() => setIsCreatingAlarm(true)}/>
      {isCreatingAlarm && <AlarmModal onClose={() => setIsCreatingAlarm(false)}/>}
      <Alarm hour="6" minute="30" am_pm="am"/>
      <Alarm hour="5" minute="25" am_pm="pm"/>
      <HomeButton/>
    </>
  )
}

export default Alarms