import styles from "../AlarmsStyles/AlarmModalStyles.module.css"
import { useState } from "react"

function AlarmModal({onClose, onSave, alarm}) {

    const [alarmName, setAlarmName] = useState('');
    const [alarmTime, setAlarmTime] = useState('');
    const [repeatMode, setRepeatMode] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!alarmName || !alarmTime || !repeatMode) return;
        const alarm={
            alarmName, 
            alarmTime, 
            repeatMode
        };
        console.log(alarm);
        onSave(alarm);
        onClose();
    }



  return (
    <>
        <form id="myFormulary" className={styles.alarmModal} onSubmit={handleSubmit}>
            <label className={styles.alarmTitle} htmlFor="">Alarm Name</label>
            <input className={styles.alarmInput} type="text" value={alarmName} onChange={ev => setAlarmName(ev.target.value)} required/>
            <label className={styles.alarmTitle} htmlFor="">Set Time</label>
            <input className={styles.alarmInput} type="time" value={alarmTime} onChange={ev => setAlarmTime(ev.target.value)} required/>
            <label className={styles.alarmTitle} htmlFor="">Repeat</label>    
            <select className={styles.alarmInput} name="repeat" id="" value={repeatMode} onChange={ev => setRepeatMode(ev.target.value)} required>
                <option value=""></option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>

            <button className={styles.alarmButton} type="submit" >Save</button>
            <button className={styles.alarmButton} type="button" onClick={onClose}>Cancel</button>
        </form>      
    </>
  )
}

export default AlarmModal