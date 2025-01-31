import React, { useState, useEffect } from "react";
import TableData from "./components/TableData";
import EmployeeForm from "./components/EmployeeForm";
import './App.css';


const API_URL = "http://localhost:5000/employee";

const App = () => {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEmployee(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleAddEmployee = async (newEmployee) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });
      if (response.ok) fetchEmployee();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const filteredEmployees = employee.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search employees"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <TableData employee={filteredEmployees} />
    </div>
  );
};

export default App;