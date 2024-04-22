/* eslint-disable react/prop-types */

import { searchTypeEnum } from "../global/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function TodoListRow({ todo, handleCheck, handleRemove, isActive }) {
  return (
    <div className={`todo-row ${isActive ? "active" : "inactive"}`}>
      <input
        className="todo-done"
        type="checkbox"
        onChange={handleCheck}
        checked={todo.isDone}
        id={`todo-done-${todo.id}`}
      />
      <div className={`todo-content ${todo.isDone ? "done" : "undone"}`}>
        {todo.content}
      </div>
      <button
        className="todo-remove"
        onClick={handleRemove}
        id={`todo-remove-${todo.id}`}
      >
        <FontAwesomeIcon icon={fas.faXmark} />
      </button>
    </div>
  );
}

function ShowArea({ data, updateData, searchText, searchType }) {
  function handleCheck(todoId, e) {
    updateData((draft) => {
      let todoRow = draft.filter((x) => x.id === todoId)[0];
      todoRow.isDone = e.target.checked;
    });
  }
  function handleRemove(todoId) {
    updateData((draft) => draft.filter((x) => x.id !== todoId));
  }
  function checkIsActive(todo) {
    return (
      todo.content.indexOf(searchText) !== -1 &&
      ((todo.isDone && searchType !== searchTypeEnum.UNDONE) ||
        (!todo.isDone && searchType !== searchTypeEnum.DONE))
    );
  }

  return (
    <div className="show-area">
      {data.map((todo) => (
        <TodoListRow
          key={todo.id}
          todo={todo}
          handleCheck={(e) => handleCheck(todo.id, e)}
          handleRemove={() => handleRemove(todo.id)}
          isActive={checkIsActive(todo)}
        />
      ))}
    </div>
  );
}

export default ShowArea;
export { TodoListRow };
