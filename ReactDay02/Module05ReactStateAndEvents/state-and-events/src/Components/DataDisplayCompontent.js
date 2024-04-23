import React from "react";

const DataDisplayComponent = (props) => {
  const { employee } = props; // Destructure props directly to access 'emp' array

  return (
    <div>
      <h2>Employee Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.company}</td>
              <td>{data.salary}</td>
              <td>{data.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplayComponent;
