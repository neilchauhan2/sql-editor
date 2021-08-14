import React from "react";
import Select from "react-select";

const SelectQuery = ({ table, fields, handleSelectedFields }) => {
  const tableFields = table.length > 0 ? Object.keys(table[0]) : [];
  const options =
    tableFields.length > 0
      ? [
          ...tableFields.map((field) => ({
            value: field,
            label: field,
          })),
        ]
      : [];

  return (
    <div className="container select-query">
      <h2 className="is-size-2">Select Query</h2>
      <div className="select-field">
        <label className="label">Choose Fields</label>
        <Select
          isMulti
          options={options}
          value={fields}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelectedFields}
        />
      </div>
    </div>
  );
};

export default SelectQuery;
