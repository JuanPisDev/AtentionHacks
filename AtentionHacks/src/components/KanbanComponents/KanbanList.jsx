import KanbanListItem from '../KanbanComponents/KanbanListItem'
import styles from "../KanbanComponents/KanbanStyles/KanbanListStyles.module.css"

function KanbanList({listTitle, listsValues}) {
  return (
    <>
      <div className={styles.kanbanList}>
        <h2 className={styles.listTitle}>{listTitle}</h2>
        <div className={styles.itemsContainer}>
          {listsValues.items.map((item) => (   
              <KanbanListItem 
                key={item.id}
                listItem={item}
              />
          ))}          
        </div>
      </div>
    </>
  )
}

export default KanbanList