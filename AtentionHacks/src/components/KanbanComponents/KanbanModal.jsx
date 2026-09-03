import styles from "../KanbanComponents/KanbanStyles/KanbanModalStyles.module.css"

function KanbanModal({newList, selectedList, listItem, setNewList, setSelectedList, setListItem, addNewList, addNewListItem, onClose}){

    return(
        <>
        <form action="" className={styles.kanbanModal} >
            <label className={styles.kanbanTitle} htmlFor="">Agregar Lista</label>
            <input className={styles.kanbanInput} type="text" value={newList} onChange={ev => setNewList(ev.target.value)} />

            <button 
            type="button" 
            className={styles.kanbanButton} 
            onClick={() => 
            addNewList({
                id: crypto.randomUUID(), 
                listTitle:newList, 
                items:[]
            })}
            >Agregar Lista</button>

            <label className={styles.kanbanTitle} htmlFor="">Lista a la que quieres agregar una tarea</label>
            <input className={styles.kanbanInput} type="text" value={selectedList} onChange={ev => setSelectedList(ev.target.value)}/>
            <label className={styles.kanbanTitle} htmlFor="">Agregar tarea</label>
            <input className={styles.kanbanInput} type="text" value={listItem} onChange={ev => setListItem(ev.target.value)} />
            <button 
            type="button" 
            className={styles.kanbanButton} 
            onClick={() => 
                addNewListItem(selectedList, listItem)
                }
            >Agregar Tarea</button>
            <button className={styles.kanbanButton} onClick={onClose}>Cerrar</button>
        </form>
        </>
    )
}

export default KanbanModal