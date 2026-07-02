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
        <form id="myFormulary" onSubmit={handleSubmit}>
            <label htmlFor="">Alarm Name</label>
            <input type="text" value={alarmName} onChange={ev => setAlarmName(ev.target.value)} required/>
            <input type="time" value={alarmTime} onChange={ev => setAlarmTime(ev.target.value)} required/>
            <h2>Repeat</h2>
            <select name="repeat" id="" value={repeatMode} onChange={ev => setRepeatMode(ev.target.value)} required>
                <option value=""></option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>

            <button type="submit" >Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>      
    </>
  )
}

export default AlarmModal