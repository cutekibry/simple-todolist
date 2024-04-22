/* eslint-disable react/prop-types */
import _ from "lodash";

function MultiSelector({ value, updateValue, choiceNames }) {
  return (
    <div className="multi-selector">
      {_.range(0, choiceNames.length).map((i) => (
        <button
          key={i}
          onClick={() => updateValue(i)}
          className={`ui-button ${value === i ? "active" : "inactive"}`}
        >
          {choiceNames[i]}
        </button>
      ))}
    </div>
  );
}

export default MultiSelector;
