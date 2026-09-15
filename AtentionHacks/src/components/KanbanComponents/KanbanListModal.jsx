import styles from "../KanbanComponents/KanbanStyles/KanbanModalStyles.module.css"

function KanbanListModal({
    newList, 
    selectedList, 
    listItem, 
    setNewList,  
    setListItem, 
    addNewList, 
    addNewListItem, 
    onClose, 
    editList,
    editListItem,
    setNewItem,
    modalMode,
    newItem,
    selectedItem
})

    {
    return(
        
        <>

        {modalMode === "editItem" && (
            
            <>
                <form className={styles.kanbanModal}>
                    <label className={styles.kanbanTitle}>
                        Editar Tarea
                    </label>
                    <input type="text" 
                        className={styles.kanbanInput}
                        value={newItem}
                        onChange={ev => setNewItem(ev.target.value)}
                    />
                    <button
                        type="button"
                        className={styles.kanbanButton}
                        onClick={()=>{
                            editListItem(
                                selectedList,
                                selectedItem,
                                newItem
                            );
                            onClose();
                        }}
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className={styles.kanbanButton}
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </form>
            </>
        )}

        {modalMode === "editList" && (
            <>
                <form className={styles.kanbanModal}>
                    <label className={styles.kanbanTitle}>
                        Editar Lista
                    </label>
                    <input type="text" 
                        className={styles.kanbanInput}
                        value={newList}
                        onChange={ev => setNewList(ev.target.value)}
                    />
                    <button
                        type="button"
                        className={styles.kanbanButton}
                        onClick={()=>{
                            editList(selectedList,newList);
                            onClose();
                        }}
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className={styles.kanbanButton}
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </form>
            </>
        )}

        {modalMode === "createList" && (
            <>
                <form action="" className={styles.kanbanModal} >

                    <label className={styles.kanbanTitle} htmlFor="">Agregar Lista</label>
                    <input className={styles.kanbanInput} type="text" value={newList} onChange={ev => setNewList(ev.target.value)} />

                    <button 
                        type="button" 
                        className={styles.kanbanButton} 
                        onClick={() =>{ 
                        addNewList({
                            id: crypto.randomUUID(), 
                            listTitle:newList, 
                            items:[]
                        });
                        onClose();
                    }}
                    >Agregar Lista</button>
                    <button className={styles.kanbanButton} onClick={onClose}>Cerrar</button>
                </form>
            </>
        )}

        {modalMode === "createItem" && (
            <>
                <form action="" className={styles.kanbanModal} >
                    <label className={styles.kanbanTitle} htmlFor="">Agregar tarea</label>
                    <input className={styles.kanbanInput} type="text" value={listItem} onChange={ev => setListItem(ev.target.value)} />
                    <button 
                        type="button" 
                        className={styles.kanbanButton} 
                        onClick={() => {
                                addNewListItem(selectedList, listItem);
                                onClose();
                            }
                        }
                    >Agregar Tarea</button>
                    <button className={styles.kanbanButton} onClick={onClose}>Cerrar</button>
                </form>
            </>
        )}

        
        </>
    )
}

export default KanbanListModal