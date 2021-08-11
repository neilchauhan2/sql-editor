import React, { useState } from "react";
import data from "../../data/data.json";
import ResultView from "./ResultView";

const Editor = () => {
  const tables = Object.keys(data);
  const [selectedTable, setSelectedTable] = useState("");
  const table = selectedTable.length > 0 ? data[selectedTable] : null;

  return (
    <div className="editor container">
      <h1 className="is-size-1">Editor</h1>
      <div className="table-select">
        <label className="label">Select a Table</label>
        <div className="select">
          <select
            className="is-capitalized"
            onChange={(e) => {
              setSelectedTable(e.target.value);
            }}
          >
            <option value="is-active">--</option>
            {tables.map((table) => (
              <option value={table}>{table}</option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <ResultView table={table} />
    </div>
  );
};

export default Editor;
