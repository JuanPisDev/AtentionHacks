import HomeButton from '../components/HomeComponents/HomeButton'
import NewAlarmButton from '../components/AlarmsComponents/NewAlarmButton/NewAlarmButton'
import { useState } from 'react';
import KanbanList from '../components/KanbanComponents/KanbanList'

function Kanban() {
    const [lists, setLists] = useState([]);
  return (
    <>
      <h1 >Your KanBan</h1>
      <div className='KanbanSection'>
        { <div>
          {lists.map((list) => (
            <kanbanList
              listTitle={list.listTitle}
            />

          ))}
        </div> }
        <label htmlFor="">Agregar Lista</label>
        <input type="text" />
        <button>Agregar Lista</button>
        <label htmlFor="">Lista a la que quieres agregar una tarea</label>
        <input type="text" />
        <label htmlFor="">Agregar tarea</label>
        <input type="text" />
        <button>Agregar Tarea</button>
        <HomeButton />
      </div>
    </>
  )
}

export default Kanban