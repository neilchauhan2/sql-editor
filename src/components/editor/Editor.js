import React, { useState, useEffect } from "react";
import data from "../../data/data.json";
import SelectQuery from "./SelectQuery";
import ResultView from "./ResultView";
import { useSelectFields } from "../../hooks/useSelectFields";

const Editor = () => {
  const tables = Object.keys(data);
  const [selectedTable, setSelectedTable] = useState("");
  const [operation, setOperation] = useState("");
  const [showResult, setShowResult] = useState(false);

  const table = selectedTable.length > 0 ? data[selectedTable] : null;
  const [fields, handleSelectedFields] = useSelectFields();

  const handleToggleResult = () => {
    setShowResult(!showResult);
  };

  useEffect(() => {
    if (fields.length === 0) setShowResult(false);
  }, [fields]);

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
          <SelectQuery
            table={table}
            handleSelectedFields={handleSelectedFields}
          />
          <button className="mt-2 button is-link" onClick={handleToggleResult}>
            Show Result
          </button>
        </>
      )}

      {table != null && showResult && (
        <ResultView fields={fields} table={table} />
      )}
    </div>
  );
};

export default Editor;
