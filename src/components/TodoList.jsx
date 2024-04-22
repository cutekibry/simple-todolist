/* eslint-disable react/prop-types */
import { useLocalStorage, useTextInput } from "../utils/hooks.jsx";

import TodoListSearchBar from "./TodoListSearchBar.jsx";
import TodoListInsertBar from "./TodoListInsertBar.jsx";
import TodoListShowArea from "./TodoListShowArea.jsx";

import { searchTypeEnum } from "../global/enums.jsx";

function TodoList() {
  const [data, updateData] = useLocalStorage({
    name: "todos",
    initial: [],
  });
  const [searchText, , handleSearchTextChange] = useTextInput({
    name: "search-bar-text",
    initial: "",
  });
  const [searchType, updateSearchType] = useLocalStorage({
    name: "search-type",
    initial: searchTypeEnum.ALL,
  });

  return (
    <div className="todo-list">
      <TodoListInsertBar data={data} updateData={updateData} />
      <TodoListShowArea
        data={data}
        updateData={updateData}
        searchText={searchText}
        searchType={searchType}
      />
      <TodoListSearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        searchType={searchType}
        updateSearchType={updateSearchType}
      />
    </div>
  );
}

export default TodoList;
