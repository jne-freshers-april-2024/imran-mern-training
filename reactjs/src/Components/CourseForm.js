import React from "react";
import { useState } from "react";
import DisplyCourseList from "./DisplyCourseList";
import './CourseForm.css'
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
           <form className='courseForm' onSubmit={onaddCourse}>
               <div className='courseDiv'>
               <label className='courseLable' htmlFor='coursename'> Course Name </label>
               <input className='courseInput' id='name' type="text" name="course" value={course} onChange={onCourseNameChange}></input>
                </div>
               <button className='courseButton' type="submit">Add Course</button>
              
           </form>
           <DisplyCourseList courses={courseData}/>
        </div>
      )
}

export default CourseForm;