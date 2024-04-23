import React from "react";
import { useState } from "react";
import DisplyCourseList from "./DisplyCourseList";
import "./CourseForm.css";
import Card from "./Card";
import ErrorHandler from "./ErrorHander";

const CourseForm = () => {
  const [course, setCourse] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [error , setError] = useState(null);

  const onaddCourse = (event) => {
    event.preventDefault();
    if(course.trim().length === 0){
        setError({
            title:"Error Ocurred",
            message:"Enter course name(course name enter please"
        })
    }else{
      setCourseData([...courseData, course]);
      setCourse("");
    }
   
  };
  const onCourseNameChange = (event) => {
    setCourse(event.target.value);
  };
  
  const onErrorHandler = ()=>{
    setError(null);
  }
  return (
    <div>
     {error && <ErrorHandler onConform={onErrorHandler} title={error.title} message={error.message} />}  
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

      <DisplyCourseList courses={courseData} />
    </div>
  );
};

export default CourseForm;


