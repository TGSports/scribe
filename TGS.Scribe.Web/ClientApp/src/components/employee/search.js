import React, { useState, useEffect } from 'react';
import { employeeService } from "../services/employeeService";

export const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearchChanged = event => {
    var newTerm = event.target.value?.toLocaleLowerCase() ?? '';
    setSearchTerm(newTerm);
  };

  useEffect(() => {
    var allEmployees = employeeService.getAll();
    setData(allEmployees);
  }, []);

  const results = !searchTerm
    ? data
    : data.filter(item => item.firstName.includes(searchTerm)
      || item.lastName.includes(searchTerm)
      || item.email.includes(searchTerm)
      || item.employeeNumber.includes(searchTerm)
      );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChanged}
      />
      <ul>
        {results.map(item => (
          <li key={item.employeeNumber}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}