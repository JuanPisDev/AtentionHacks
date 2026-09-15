import KanbanListItem from '../KanbanComponents/KanbanListItem'
import styles from "../KanbanComponents/KanbanStyles/KanbanListStyles.module.css"

function KanbanList({
  listTitle,
  listsValues,
  listId,
  openItemModal,
  openEditList,
  openEditListItem,
  deleteList,
  deleteListItem,
  editListItem
    }) {

      

  return (
    <>
      <div className={styles.kanbanList}>
        <div className={styles.listTitle}>
        <h2 >{listTitle}</h2>
        <button onClick={() => openItemModal(listId) }>+</button>
        </div>
        <div className={styles.itemsContainer}>
          {listsValues.items.map((item) => (   
              <KanbanListItem 
                key={item.id}
                listItem={item}
                listId={listId}
                editListItem={editListItem}
                deleteListItem={deleteListItem}
                openEditListItem={openEditListItem}
              />
          ))}          
        </div>
          <button
            onClick={() => {openEditList(listId)}}
          >
            ✏️
          </button>
        <button onClick={ () => {
          if(confirm(`¿Eliminar la lista "${listTitle}"?`)){
            deleteList(listId);
          }
        }}>
            🗑
        </button>
      </div>
    </>
  )
}

export default KanbanList