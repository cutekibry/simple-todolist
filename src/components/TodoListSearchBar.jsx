/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

import MultiSelector from "../ui/MultiSelector";

import { searchTypeNames } from "../global/enums";

function TodoListSearchBar({
  searchText,
  handleSearchTextChange,
  searchType,
  updateSearchType,
}) {
  return (
    <div className="search-bar">
      <div className="search-area">
        <FontAwesomeIcon icon={fas.faMagnifyingGlass} />
        <input
          type="text"
          placeholder="搜索..."
          value={searchText}
          id="search-bar-text"
          onChange={handleSearchTextChange}
        />
      </div>
      <MultiSelector
        value={searchType}
        updateValue={updateSearchType}
        choiceNames={_.range(0, 3).map((i) => searchTypeNames[i])}
      />
    </div>
  );
}

export default TodoListSearchBar;
