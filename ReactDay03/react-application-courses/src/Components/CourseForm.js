import React from "react";
import { useState } from "react";
import DisplyCourseList from "./DisplyCourseList";
const CourseForm = ()=>{
      const[course , setCourse] = useState('');
      const[courseData, setCourseData] = useState([]);

      const onaddCourse = (event)=>{
        event.preventDefault();
        console.log('inside');
        setCourseData([...courseData,course]);
        setCourse('');
        
      }
      const onCourseNameChange = (event)=>{
         console.log(course);
         setCourse(event.target.value);
         
      }
      return(
       <div>
           <form onSubmit={onaddCourse}>
               <div>
               <label htmlFor='coursename'> Course Name </label>
               <input id='name' type="text" name="course" value={course} onChange={onCourseNameChange}></input>
                </div>
               <button type="submit">Add Course</button>
              
           </form>
           <DisplyCourseList courses={courseData}/>
        </div>
      )
}

export default CourseForm;