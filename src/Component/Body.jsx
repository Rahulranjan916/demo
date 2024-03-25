import {React, useEffect, useState} from 'react'
import '../Css/Body.css'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import axios from 'axios';
const apiKey = "96d65823579e7e688bc2bc9d110cfcd3";
const url = "https://api.themoviedb.org/3/movie/";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const popular = "popular"
const upcoming = "upcoming"
const topRated = "top_rated"


const Card = ({img}) =>(
    <img className='card' src={img} alt="cover"/>
)
const Row = ({title , arr=[
] }) =>(
    <div className='row'>
        <h2 >
            {title}
        </h2>
        <div>
            {
                arr.map((item,index)=>(
                    <Card key={index} img ={`${imgUrl}/${item.poster_path}`} />
                ))
            }
        </div>
       
    </div>
)
const Body = () =>{

    const [upcomingMovies,setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

            useEffect (()=>{
                const fetchUpcoming = async() =>{
                   const{data } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
                   setUpcomingMovies(data.results);
                };
                const fetchPopular = async() =>{
                    const{data } = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
                    setPopularMovies(data.results);
                 };

                const fetchNowPlaying = async () =>{
                    const {data} = await axios.get(`${url}/${topRated}?api_key=${apiKey}`)
                    setNowPlaying(data.results);
                }
                fetchUpcoming();
                fetchPopular();
                fetchNowPlaying();
    
            },[]);
    return(
        <section className="home">
            <div className="banner"
             style={{
                backgroundImage: popularMovies[0]
                    ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                    : "rgb(16, 16, 16)",
            }}
            >
                  {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>

            </div>
            <Row  title={"Upcoming Movies"} arr={upcomingMovies}/>
            <Row  title={"Popular on Netflix"} arr={popularMovies} />
            <Row  title={"Top Rated"} arr={nowPlaying} />
        </section>
    )
}

export default Body;