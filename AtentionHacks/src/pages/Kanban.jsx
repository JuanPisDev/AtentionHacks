import HomeButton from '../components/HomeComponents/HomeButton'
import NewAlarmButton from '../components/AlarmsComponents/NewAlarmButton/NewAlarmButton'
import { useState } from 'react';
import KanbanList from '../components/KanbanComponents/KanbanList'
import KanbanModal from '../components/KanbanComponents/KanbanModal';
import styles from "../components/KanbanComponents/KanbanStyles/KanbanStyles.module.css"

function Kanban() {
    const [lists, setLists] = useState([]);
    const [newList, setNewList] =useState("");
    const [selectedList, setSelectedList] = useState("");
    const [listItem, setListItem] = useState("");
    const [creatingList, setCreatingList] = useState(false);

    function addNewList(list){
        const alreadyExist= lists.some(
          existingList => existingList.listTitle === list.listTitle
        );  
        if (alreadyExist){
          alert("La lista que intentas crear ya existe, por favor intentalo con otro nombre.")
          return;
        } 
          
        setLists((prevLists) => [...prevLists, list]);
        console.log(alreadyExist);

    } 
    function addNewListItem(selectedList, listItem){
      setLists(prevLists =>
        prevLists.map(list =>
          selectedList === list.listTitle
          ? {
            ...list,
              items:[...list.items, 
                {
                  id:crypto.randomUUID(), 
                  text:listItem
                }]
          }
          : list
        ))}
  return (
    <>
      <h1 className={styles.title}>Your KanBan</h1>
      <NewAlarmButton onClick={() => {setCreatingList(true)}}/>
      <div >
        <div className={styles.kanbanBoard}>
        {lists.map((list) => (
            <KanbanList
              key={list.id}
              listTitle={list.listTitle}
              listsValues={list}
            /> 

          ))}
        </div>
          {creatingList && 
          <div>
          
            <KanbanModal 
              newList={newList}
              setNewList={setNewList}

              selectedList={selectedList}
              setSelectedList={setSelectedList}

              listItem={listItem}
              setListItem={setListItem}

              addNewList={addNewList}
              addNewListItem={addNewListItem}

              onClose={() => setCreatingList(false)}
            />
          
          </div>}
        <HomeButton />
      </div>
    </>
  )
}

export default Kanban