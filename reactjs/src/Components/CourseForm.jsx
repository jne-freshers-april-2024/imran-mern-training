import React from "react";
import { useState } from "react";
import DisplyCourseList from "./DisplyCourseList";
import "./CourseForm.css";
import Card from "./Card";
const CourseForm = () => {
  const [course, setCourse] = useState("");
  const [courseData, setCourseData] = useState([]);

  const onaddCourse = (event) => {
    event.preventDefault();
    setCourseData([...courseData, course]);
    setCourse("");
  };
  const onCourseNameChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div>
      <Card>
      <form className="courseForm" onSubmit={onaddCourse}>
        <div className="courseDiv">
          <label className="courseLable" htmlFor="coursename">
            {" "}
            Course Name{" "}
          </label>
          <input
            className="courseInput"
            id="name"
            type="text"
            name="course"
            value={course}
            onChange={onCourseNameChange}
          ></input>
        </div>
        <button className="courseButton" type="submit">
          Add Course
        </button>
      </form>
      </Card>
      <DisplyCourseList courses={courseData} />
    </div>
  );
};

export default CourseForm;
