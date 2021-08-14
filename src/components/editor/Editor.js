import React, { useState, useEffect } from "react";
import SelectQuery from "../query/SelectQuery";
import ResultView from "../result/ResultView";
import { useSelectFields } from "../../hooks/useSelectFields";
import axios from "axios";

const Editor = () => {
  const tables = ["customers", "products"];
  const [selectedTable, setSelectedTable] = useState("");
  const [operation, setOperation] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [table, setTable] = useState([]);
  const [fields, handleSelectedFields] = useSelectFields();
  const [keyword, setKeyword] = useState("");

  const handleToggleResult = () => {
    setShowResult(!showResult);
  };

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword.length >= 1) {
      axios
        .get(`http://localhost:2000/${selectedTable}?q=${keyword}`)
        .then((res) => {
          setTable(res.data);
        });
    }
  }, [keyword]);

  useEffect(() => {
    if (selectedTable.length > 0) {
      axios.get(`http://localhost:2000/${selectedTable}`).then((res) => {
        setTable(res.data);
      });
    }
  }, [selectedTable]);

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
                  handleSelectedFields([]);
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
            fields={fields}
            handleSelectedFields={handleSelectedFields}
          />
          <button className="mt-2 button is-link" onClick={handleToggleResult}>
            Show Result
          </button>
        </>
      )}

      {table != null && showResult && (
        <ResultView
          fields={fields}
          table={table}
          handleSearch={handleSearch}
          keyword={keyword}
        />
      )}
    </div>
  );
};

export default Editor;
