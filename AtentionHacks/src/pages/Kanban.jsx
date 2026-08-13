import HomeButton from '../components/HomeComponents/HomeButton'
import NewAlarmButton from '../components/AlarmsComponents/NewAlarmButton/NewAlarmButton'
import { useState } from 'react';
import KanbanList from '../components/KanbanComponents/KanbanList'

function Kanban() {
    const [lists, setLists] = useState([]);
    const [newList, setNewList] =useState("");
    // const newListItemVar;

    function addNewList(list){
      setLists((prevLists) => [...prevLists, list])
    } 
  return (
    <>
      <h1 >Your KanBan</h1>
      <div className='KanbanSection'>
        <div>
        {lists.map((list) => (
            <KanbanList
              listTitle={list.listTitle}
            />

          ))}
        </div>
        <label htmlFor="">Agregar Lista</label>
        <br />
        <input type="text" />
        <br />
        <button onClick={() => addNewList({id: 1, listTitle:'To Do'})}>Agregar Lista</button>
        <br />
        <label htmlFor="">Lista a la que quieres agregar una tarea</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Agregar tarea</label>
        <br />
        <input type="text" />
        <br />
        <button>Agregar Tarea</button>
        <HomeButton />
      </div>
    </>
  )
}

export default Kanban