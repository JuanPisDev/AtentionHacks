import KanbanListItem from '../KanbanComponents/KanbanListItem'

function KanbanList({listTitle, listsValues}) {
  return (
    <>
      <div>
        <h2>{listTitle}</h2>
        <div>
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