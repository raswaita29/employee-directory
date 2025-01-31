import React, { useState } from "react";
import '../App.css'

const EmployeeForm = ({ onAddEmployee }) => {
  const [form, setForm] = useState({ name: "", designation: "", department: "", contact: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee(form);
    setForm({ name: "", designation: "", department: "", contact: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name"> Employee Name:
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /> </label>
      <label htmlFor="designation">Designation:
      <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} required /></label>
      <label htmlFor="department">Department:
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required /></label>
      <label htmlFor="contact">Contact:
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} required /></label>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;