import React from "react";
import Search from "../misc/Search";

const ResultView = ({ table, fields, handleSearch, keyword }) => {
  return (
    <div className="container mt-4 result-view">
      <Search handleSearch={handleSearch} keyword={keyword} />
      <table className="table mt-4 is-fullwidth is-striped">
        <thead>
          <tr>
            {fields.map((field, idx) => (
              <th key={idx + field.value}>{field.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, idx) => (
            <tr key={idx}>
              {fields.map((field) => (
                <td key={field.value}>{row[field.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultView;
