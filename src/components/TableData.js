import React from "react";
import '../App.css';

const TableData = ({ employee }) => {
  return (
    <table border={2} width="40%" cellPadding={10}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.designation}</td>
            <td>{emp.department}</td>
            <td>{emp.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;