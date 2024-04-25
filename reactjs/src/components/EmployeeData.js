import React from "react";
import useHttp from "../hooks/use-http";

const EmployeeData = () => {
  const c = "https://dummyapi.online/api/users";
  let data = useHttp(c);
  if (!data) {
    data = [];
  }
  return (
    <div className="div">
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeData;

