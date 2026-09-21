import styles from "../KanbanComponents/KanbanStyles/KanbanListItemStyles.module.css"

function KanbanListItem({listItem, listId, deleteListItem, openEditListItem, openMoveItemModal}) {
  return (
    <>
      <div className={styles.listItem}>
        <button
          type="button"
          className={styles.lisItemText}
          onClick={() => openMoveItemModal(listId, listItem.id)}
        
        >
          
          {listItem.text}
        
        </button>
        <div className={styles.editButtons}>
        <button 
          onClick={() => openEditListItem(listId, listItem.id)}
        >
          ✏️
        </button>
        <button
          onClick={() => deleteListItem(listId, listItem.id)}
        >
          🗑
        </button>
        </div>
      </div>
    </>
  )
}

export default KanbanListItem