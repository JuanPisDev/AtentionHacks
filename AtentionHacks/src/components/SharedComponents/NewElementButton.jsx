import styles from "../SharedComponents/styles/newElementButton.module.css"

function NewElementButton({onClick, buttonName}) {
  return (
    <>
      <button className={styles.elementButton} onClick={onClick}>
        {buttonName}
      </button>
    </>
  )
}

export default NewElementButton