import { useState } from "react";

export const useSelectFields = () => {
  const [fields, setFields] = useState([]);

  const handleSelectedFields = (options) => {
    setFields([...options]);
  };
  return [fields, handleSelectedFields];
};
