import styles from "../KanbanComponents/KanbanStyles/KanbanListItemStyles.module.css"

function KanbanListItem({listItem}) {
  return (
    <>
      <div className={styles.listItem}>
        <p>{listItem.text}</p>
      </div>
    </>
  )
}

export default KanbanListItem