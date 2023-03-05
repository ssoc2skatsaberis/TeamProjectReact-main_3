import React ,{useState,useEffect}from 'react';
import StatsItem from './StatsItem';

export default function Stats({title}){
    const url = "https://chain-legendary-strawflower.glitch.me/stats";
    const [stats,setStats] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) =>{
            setStats(data);
        });
    },[]);

    return (
        <>
         <div className="flex flex-col py-2 mt-4 mx-auto">
                <h3 className="text-3xl font-semibold text-indigo-100 py-2 px-5 mx-auto border-b-2 border-gray-100">{title}</h3>
        </div>
        <div className="grid gap-1 md:grid-cols-4 justify-items-center justify-self-center shadow-md bg-white py-5 mx-auto rounded-3xl">
            {stats.length && 
            stats.map(({id,title,amount}) =>
            (
                <StatsItem key={id} title={title} amount={amount}/>
            ))}
        
            </div>
        </>
       
    )
}