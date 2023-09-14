import { useState } from "react";

const KEYS = ["name", "lastname", "position"];

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const useData = () => {
  const [employees, setEmployees] = useState(mockEmployees);

  const create = (data) => {
    if (typeof data !== "object") {
      alert("Please input object of employee");
      return;
    }
    for (const key of KEYS) {
      if (!(key in data)) {
        alert(`Missing field ${key}`);
        return;
      }
    }

    setEmployees((prev) => [...prev, data]);
  };

  const get = () => {
    return employees;
  };



const remove = (id) => {
    const updatedData = employees.filter((item) => item.id !== id);
    setEmployees(updatedData);
  };

  return { create, remove, get };
};

export default useData;
