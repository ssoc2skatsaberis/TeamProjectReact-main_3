import React, { useEffect,useState } from 'react';
import CourseItem from './CourseItem';

export default function CourseTable({id,title,online,start_date,end_date,imagePath,duration}){
    const url = 'http://localhost:3001/courses/';
    const [courses,setCourses]= useState([]);


useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> {
        const lastCourses = data.slice(-4);
        setCourses(lastCourses);});
},[])

    return(
        <>
             <table className="shadow-2xl font-[Poppins] border-2 border-indigo-200 overflow-hidden rounded-xl mt-2 mb-5 mx-auto">
                            <thead className="text-white">
                                <tr>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Title</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Duration</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Start Date</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        End Date</th>
                                        <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Online</th>
                                    <th
                                        className="px-6 py-3 bg-indigo-800">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-indigo-800 text-center">
                                {courses.length && courses.map((item) =>{
                                     return (<CourseItem key={item.id} title={item.title} duration={item.duration} start_date ={item.dates.start_date.split("-").reverse().join("/")} end_date={item.dates.end_date.split("-").reverse().join("/")} online={item.online} id={item.id}/>)
                                }
        
                                )}                                                           
                            </tbody>
                        </table>
        </>

    )
}