import React, { useState } from "react";
import data from "../../data/data.json";
import SelectQuery from "./SelectQuery";
import ResultView from "./ResultView";

const Editor = () => {
  const tables = Object.keys(data);
  const [selectedTable, setSelectedTable] = useState("");
  const [operation, setOperation] = useState("");
  const [showResult, setShowResult] = useState(false);

  const table = selectedTable.length > 0 ? data[selectedTable] : null;

  const handleToggleResult = () => {
    setShowResult(!showResult);
  };

  return (
    <div className="container editor">
      <h1 className="is-size-1">Editor</h1>
      <div className="columns">
        <div className="column">
          <div className="table-select">
            <label className="label">Choose a Table</label>
            <div className="select">
              <select
                className="is-capitalized"
                onChange={(e) => {
                  setSelectedTable(e.target.value);
                }}
              >
                <option value="is-active">--</option>
                {tables.map((table, idx) => (
                  <option key={idx} value={table}>
                    {table}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="table-select">
            <label className="label">Choose an Operation</label>
            <div className="select">
              <select
                className="is-capitalized"
                onChange={(e) => {
                  setOperation(e.target.value);
                }}
              >
                <option className="is-active" value="">
                  --
                </option>
                <option value="select">Select Query</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {table != null && operation === "select" && (
        <>
          <SelectQuery table={table} />
          <button className="mt-2 button is-link" onClick={handleToggleResult}>
            Show Result
          </button>
        </>
      )}

      {table != null && showResult === true && <ResultView table={table} />}
    </div>
  );
};

export default Editor;
