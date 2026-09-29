import HomeButton from '../components/HomeComponents/HomeButton'
import NewElementButton from '../components/SharedComponents/NewElementButton.jsx'
import { useState, useEffect } from 'react';
import KanbanList from '../components/KanbanComponents/KanbanList'
import KanbanListModal from '../components/KanbanComponents/KanbanListModal.jsx';
import styles from "../components/KanbanComponents/KanbanStyles/KanbanStyles.module.css"

function Kanban() {

    useEffect(()=> {
      localStorage.setItem("myKanban", JSON.stringify(lists));
    }, [lists]);

    const [lists, setLists] = useState( () => {
      try {
        const savedLists = localStorage.getItem("myKanban");

        return savedLists
          ? JSON.parse(savedLists) 
          : [
            {
              id: crypto.randomUUID(),
              listTitle: "To Do",
              items: []
            },
            {
              id: crypto.randomUUID(),
              listTitle: "Doing",
              items: []
            },
            {
              id: crypto.randomUUID(),
              listTitle: "Done",
              items: []
            }
          ];
      } catch {
        return [];
      }
    });
    const [newList, setNewList] =useState("");
    const [selectedList, setSelectedList] = useState("");
    const [listItem, setListItem] = useState("");
    const [selectedItem, setSelectedItem] = useState("");
    const [newItem, setNewItem] = useState("");
    const [creatingList, setCreatingList] = useState(false);
    const [modalMode, setModalMode] = useState(null);
    const [targetList, setTargetList] = useState("");

    

    function addNewList(list){

      const title = list.listTitle.trim();

      if(!title){
        alert("El nombre de la lista no puede estar vacío.");
        return;
      }

        const alreadyExist= lists.some(
          existingList => existingList.listTitle.toLowerCase() === title.toLowerCase()
        );  
        if (alreadyExist){
          alert("La lista que intentas crear ya existe, por favor intentalo con otro nombre.")
          return;
        } 
          
        setLists((prevLists) => [...prevLists, list]);
        console.log(alreadyExist);

    } 
    function addNewListItem(selectedList, listItem){

      const text = listItem.trim();

      if(!text){
        alert("La tarea no puede estar vacía.");
        return;
      }

      setLists(prevLists =>
        prevLists.map(list =>
          selectedList === list.id
          ? {
            ...list,
              items:[...list.items, 
                {
                  id:crypto.randomUUID(), 
                  text:text
                }]
          }
          : list
        ))}

function editList(listId, newTitle){

  
    const title = newTitle.trim();

    if(!title){
      alert("El nombre de la tarea no puede estar vacío.");
      return;
    }

  setLists(prevLists =>
    prevLists.map(list => 
      list.id === listId
      ? {
        ...list,
        listTitle: title
      }
      :list
    )
  );
}

function deleteList(listId){
  setLists(prevLists => 
    prevLists.filter(list => list.id !== listId)
  );
}

function openEditList(listId){

        const list = lists.find(list => list.id === listId);

        setSelectedList(listId);
        setNewList(list.listTitle);
        setModalMode("editList");
        setCreatingList(true);

      }

  function openEditListItem(listId, itemId){
    const list = lists.find(list => list.id === listId);


    const item = list.items.find(item => item.id === itemId)


    setSelectedList(listId);
    setSelectedItem(itemId);
    setNewItem(item.text);
    setModalMode("editItem");
    setCreatingList(true);
  }

  function editListItem(listId, itemId, newText){

    const text = newText.trim();

    if(!text){
      alert("La tarea no puede estar vacía.")
      return;
    }

    setLists(prevLists =>
      prevLists.map(list => 
        list.id === listId
        ? {
          ...list,
          items: list.items.map(item =>
            item.id === itemId
            ? {
              ...item,
              text: text
            }
            : item
          )
        }
        : list
      )
    );
  }

  function deleteListItem(listId, itemId){
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId
        ? {
          ...list,
          items: list.items.filter(
            item => item.id !== itemId
          )
        }
        :list
      )
    )
  }

  function openMoveItemModal(listId, itemId){
    setSelectedList(listId);
    setSelectedItem(itemId);
    setTargetList("");
    setModalMode("moveItem");
    setCreatingList(true);
  }

  function moveListItem(listId, itemId, targetListId){

    const currentList = lists.find(list => list.id === listId);

    const item = currentList.items.find(
      item => item.id === itemId
    );

    setLists(prevLists =>
      prevLists.map(list => {
        if (list.id === listId)      
        {
          return {
            ...list,
          items: list.items.filter(
            item => item.id !== itemId
          )
          };
          }
        

        if (list.id === targetListId)
        {
          return{
            ...list,
              items:[...list.items, 
                {
                  id:itemId, 
                  text:item.text
                }]
          }
        }
        return list;
      })
    )
  }

  return (
    <>
      <h1 className={styles.title}>Your KanBan</h1>
      <div className={styles.buttonDiv}>
        <NewElementButton 
        buttonName={"New List"} 
        onClick={() => {
          setNewList("");
          setSelectedList("");
          setListItem("");
          setCreatingList(true);
          setModalMode("createList");
          }}
          />
      </div>
        <div className={styles.kanbanContainer}>
          <div className={styles.kanbanBoard}>
          {lists.map((list) => (
              <KanbanList
                key={list.id}
                listId={list.id}
                listTitle={list.listTitle}
                listsValues={list}
                deleteList={deleteList}
                editList={editList}
                openEditList={openEditList}
                openItemModal={(listId)=> {
                  setListItem("");
                  setSelectedList(listId);
                  setModalMode("createItem");
                  setCreatingList(true);
                }}
                editListItem={editListItem}
                deleteListItem={deleteListItem}
                openMoveItemModal={openMoveItemModal}
                openEditListItem={openEditListItem}
              /> 

            ))}
          </div>
        </div>
          {creatingList && 
          <div>
          
            <KanbanListModal 
              modalMode={modalMode}

              newList={newList}
              setNewList={setNewList}

              selectedList={selectedList}
              setSelectedList={setSelectedList}

              editList={editList}
              editListItem = {editListItem}

              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}

              newItem={newItem}
              setNewItem={setNewItem}

              listItem={listItem}
              setListItem={setListItem}

              addNewList={addNewList}
              addNewListItem={addNewListItem}

              moveListItem={moveListItem}
              lists={lists}
              targetList={targetList}
              setTargetList={setTargetList}

              onClose={() => {
                setCreatingList(false);
                setModalMode(null);
              }}
            />
          
          </div>}
                  
        <div className={styles.buttonDiv}><HomeButton /></div>
        
    </>
  )
}

export default Kanban