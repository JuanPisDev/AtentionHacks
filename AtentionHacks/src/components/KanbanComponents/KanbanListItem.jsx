import styles from "../KanbanComponents/KanbanStyles/KanbanListItemStyles.module.css"

function KanbanListItem({listItem, listId, deleteListItem, openEditListItem}) {
  return (
    <>
      <div className={styles.listItem}>
        <p>{listItem.text}</p>
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
    </>
  )
}

export default KanbanListItem