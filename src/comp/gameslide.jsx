import { useEffect, useState } from "react";
import { getGames } from "../Api/gamesapi";


function Gameslide(){
    const[games,setGames]=useState([])
    useEffect(()=>{
        getGames()
        .then((data)=>{
            console.log(data);
            setGames(data);
            
        })
        .catch((error)=>{
            console.log(error);
            
        });
    },[]);
    
    return (
        <div className="my-20 flex gap-20 flex-wrap ml-10">
            {games.filter((_,index)=>index!==4 && index!==2).map((game) => (
                <div key={game.id} className="font-serif font-extrabold  text-black">
                    <div><img
                        src={game.background_image}
                        alt={game.name}
                        className=" rounded-lg h-96 w-150 shadow-xl shadow-black/50 object-cover"
                    /></div>
                    
                    <h2 className="text-center text-3xl font-serif my-2">{game.name}</h2>
                    <hr></hr>

                </div>
            ))}
        </div>
    );
}
export default Gameslide