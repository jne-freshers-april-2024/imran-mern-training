import React  from "react";
import './DisplayCourseList.css'

const DisplyCourseList = (props)=>{
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {props.courses.map((course, index) => (
              <tr key={index}>
                <td>{course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default DisplyCourseList;