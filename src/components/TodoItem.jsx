import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    //console.log("delete button clicked for", item);
  }
  function handleClick() {
    console.log("item text clicked");
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          onClick={() => {
            handleClick;
          }}
        >
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
