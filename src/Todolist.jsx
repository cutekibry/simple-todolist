/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import {
  useLocalStorage,
  useTextInput,
  useTextInputWithEnter,
} from "./hooks.jsx";	
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function TodoListRow({ todo, handleCheck }) {
  return (
    <div className="todo-row" key={todo.id}>
      <div className="todo-done">
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={todo.isDone}
          id={`todo-${todo.id}`}
        />
      </div>
      <div className={`todo-content ${todo.isDone ? "todo-content-done" : "todo-content-undone"}`}>{todo.content}</div>
      {/* <div className="todo-time">
				{todo.time.toLocaleTimeString()}
			</div> */}
    </div>
  );
}

function SearchBar({ searchText, handleSearchTextChange }) {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={fas.faMagnifyingGlass} />
      <input
        type="text"
        placeholder="搜索..."
        value={searchText}
        id="search-bar-text"
        onChange={handleSearchTextChange}
      />
    </div>
  );
}

function InsertBar({ updateData }) {
  const [text, updateText, handleTextChange, handleKeyDown] =
    useTextInputWithEnter("insert-bar-text", "", handleClick);

  function handleClick() {
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

  return (
    <div className="insert-bar">
      <input
        id="insert-bar-text"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick} disabled={text === ""}>
        <FontAwesomeIcon icon={fas.faPlus} />
      </button>
    </div>
  );
}

function ShowArea({ data, updateData, searchText }) {
  function handleCheck(todoId, e) {
    updateData (draft => {
      let todoRow = draft.filter(x => x.id === todoId)[0];
      todoRow.isDone = e.target.checked;
      // console.log(e.target.checked);
    })
  }

  return (
    <div className="show-area">
      <div className="todo-header">
        <div>是否完成</div>
        <div>内容</div>
      </div>

      {data.map(
        (todo) =>
          todo.content.match(searchText) && (
            <TodoListRow todo={todo} handleCheck={e => handleCheck(todo.id, e)} key={todo.id} />
          )
      )}
    </div>
  );
}

function TodoList() {
  const [data, updateData] = useLocalStorage("todos", []);
  const [searchText, , handleSearchTextChange] = useTextInput(
    "search-bar-text",
    ""
  );

  return (
    <div className="todo-list">
      <InsertBar data={data} updateData={updateData} />
      <SearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <ShowArea data={data} updateData={updateData} searchText={searchText} />
    </div>
  );
}

export default TodoList;
