import KanbanListItem from '../KanbanComponents/KanbanListItem'
import styles from "../KanbanComponents/KanbanStyles/KanbanListStyles.module.css"

function KanbanList({
  listTitle,
  listsValues,
  listId,
  openItemModal,
  openEditList,
  openEditListItem,
  openMoveItemModal,
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
                openMoveItemModal={openMoveItemModal}
              />
          ))}          
        </div>
        <div className={styles.editButtons}>
          <button className={styles.editButton}
            onClick={() => {openEditList(listId)}}
          >
            ✏️
          </button>
        <button  className={styles.editButton} onClick={ () => {
          if(confirm(`¿Eliminar la lista "${listTitle}"?`)){
            deleteList(listId);
          }
        }}>
            🗑
        </button>
        </div>
      </div>
    </>
  )
}

export default KanbanList