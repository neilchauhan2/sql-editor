import React from "react";
import Select from "react-select";

const SelectQuery = ({ table, fields, handleSelectedFields }) => {
  const tableFields = Object.keys(table[0]);
  const options = [
    { value: "all", label: "all" },
    ...tableFields.map((field) => ({
      value: field,
      label: field,
    })),
  ];

  return (
    <div className="container select-query">
      <h1 className="is-size-1">Select Query</h1>
      <div className="select-field">
        <label className="label">Choose Fields</label>
        <Select
          isMulti
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSelectedFields}
        />
      </div>
    </div>
  );
};

export default SelectQuery;
