import React, { useState } from 'react';
import {Link} from 'react-router-dom';


import axios from "axios";
//import { render } from 'react-dom';

console.clear();

export default function EditPage(props)  {
    <div className="row">
        <Link to='/' className='text-black-50 p-2 col-md-5'>Go Back</Link>
    </div>

    console.log("TEST",props.data.title);
    
   // const [post, setPost] = useState(null);
    const [title, setTitle] = useState(props.data.title);
    const [duration, setDuration] = useState(props.data.duration);
    const [imagePath, setImagePath] = useState(props.data.imagePath);
    const [online, setOnline] = useState(props.data.online);
    const [description, setDescription] = useState(props.data.description);
 
    const [start_date, setStart_date] = useState(props.data.dates.start_date);
    const [end_date, setEnd_date] = useState(props.data.dates.end_date);
    const [early_bird, setEarly_bird] = useState(props.data.price.early_bird);
    const [normal, setNormal] = useState(props.data.price.normal);

    let id = (props.idNumber);
    console.log(id);
 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id,
            title,
            imagePath,
            price: { early_bird, normal },
            dates: { start_date, end_date },
            duration,
            online,
            description,
        };
            
        console.log('Link http://localhost:3001/courses/'+props.idNumber);
        axios.put('http://localhost:3001/courses/'+props.idNumber, data)
        .then((response) => {
            console.log("THE END",response)
           //   setPost(response.data);
         //   setTitle(response.title);
         //   setDescription(response.description);
         //   setDuration(post.duration);
         //   setImagePath(post.imagePath);
         //   setOnline(post.online);
         //   setStart_date(post.dates.start_date);
         //   setEnd_date(post.dates.end_date);
         //   setEarly_bird(post.price.early_bird);
         //   setNormal(post.price.normal_bird);
        }
        )
        .catch((error) => console.log(error));

        
            
        props.close();
    }
 


    if (!props.open) return null;
   
    return (
        
        
        <div style={{ position: 'relative', zIndex: '2'}} className="">
        
            <form onSubmit={handleSubmit} className="fixed top-10 left-10 right-10 bg-sky-100">
            <button type="button" class="absolute top-0 right-0 h-16 w-16 box-border h-12 w-12 p-4 border-4 bg-gradient-to-r from-sky-400 to-red-500 hover:from-pink-500 hover:to-blue-500"
            onClick={() => {
            props.close();
            }}
        >
            X
        </button>
                <h1 className="font-extrabold text-5xl mb-8  ">Edit Course</h1>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Title
                        </label>
                        <input required value={title}
                            className="  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 justify-center"
                            name="title" type="text"
                            onChange={
                                (e) => setTitle((e.target.value))
                            } placeholder="Lesson"></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Duration
                        </label>
                        <input required value={duration} 
                            className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="duration" type="text" onChange={(e) => setDuration((e.target.value))} placeholder="Duration"></input>
                    </div>
                </div>
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Image Path
                </label>
                {<input required value={imagePath} 
                    className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="imagePath" type="text" onChange={(e) => setImagePath((e.target.value))} placeholder="Image Path"></input>}
                <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    online
                </label>
                <input checked={online} type="checkbox" onChange={(e) => setOnline((e.target.checked))} />
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    description
                </label>
                <textarea required value={description}
                    className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                    name="description" type="text" onChange={(e) => setDescription((e.target.value))}>
                </textarea>

                <p className="font-bold font-weight: 700">Dates</p>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Start Date
                        </label>
                        <input required value={start_date}
                            className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="start_date" type="date" onChange={(e) => setStart_date((e.target.value))}></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            End Date
                        </label>
                        <input required value={end_date} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="end_date" type="date" onChange={(e) => setEnd_date((e.target.value))}></input>
                    </div>
                </div>
                <p className="font-bold font-weight: 700"> Price </p>

                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">


                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Early Bird
                        </label>
                        <input required value = {early_bird} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="early_bird" type="number" onChange={(e) => setEarly_bird((e.target.value))}></input>
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Normal Price
                        </label>
                        <input required value={normal} className="  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="normal" type="number" onChange={(e) => setNormal((e.target.value))}></input>
                    </div>
                </div>
                <button  className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-right " type='submit'> Edit Course </button>
            </form>


        </div>
 
 );

}
