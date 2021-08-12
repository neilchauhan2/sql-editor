import React from "react";
import { useSelectFields } from "../../hooks/useSelectFields";

const ResultView = ({ table, fields, handleSelectedFields }) => {
  console.log(table);
  console.log(fields);
  return (
    <div className="container mt-4 result-view">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            {fields.map((field) => (
              <th>{field.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr>
              {fields.map((field) => (
                <td>{row[field.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultView;
