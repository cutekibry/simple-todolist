/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { useTextInputWithEnter } from "../utils/hooks";

function TodoListInsertBar({ updateData }) {
  const [text, updateText, handleTextChange, handleKeyDown] =
    useTextInputWithEnter({
      name: "insert-bar-text",
      initial: "",
      callback: handleInsert,
    });

  function handleInsert() {
    if (text !== "") {
      updateData((draft) => {
        draft.push({
          id: nanoid(),
          time: new Date(),
          content: text,
          isDone: false,
        });
      });
      updateText("");
    }
  }

  function handleDeleteDone() {
    updateData(draft => draft.filter(todo => !todo.isDone));
  }

  return (
    <div className="insert-bar">
      <input
        id="insert-bar-text"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        type="text"
      />
      <button onClick={handleInsert} disabled={text === ""} id="insert-button">
        <FontAwesomeIcon icon={fas.faPlus} />
      </button>
      <button onClick={handleDeleteDone}>
        删除已完成
      </button>
    </div>
  );
}

export default TodoListInsertBar;
