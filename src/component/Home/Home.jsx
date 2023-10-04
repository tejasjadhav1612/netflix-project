import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Row from '../Row-Card/Row'
import axios from 'axios';
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const url = "https://api.themoviedb.org/3";
const api_key = "fd9b761d02343fca81f0f4ecc5631e4c";
// https://api.themoviedb.org/3/movie/popular?api_key=fd9b761d02343fca81f0f4ecc5631e4c
const imgUrl = "https://image.tmdb.org/t/p/original"
const Home = () => {
  const [popularShows, setPopularMovies] = useState([]);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/popular?api_key=${api_key}`);
      setPopularMovies(results);
    }
    const fetchUpcoming = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/upcoming?api_key=${api_key}`);
      setUpcomingMovies(results);
      // console.log(results)
    }
    const fetchGenre = async () => {
      const { data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${api_key}`);
      setGenre(genres);
      console.log(genres)
    }
    fetchPopular();
    fetchUpcoming();
    fetchGenre();
  }, []);
  return (
    <section className='home'>
      <div className='banner'
        style={{ backgroundImage: popularShows[0] ? `url(${`${imgUrl}/${popularShows[0].poster_path}`})` : "rgb(16,16,16)" }}
      >

        {popularShows[0] && <h1>{popularShows[0].original_title}</h1>}
        {popularShows[0] && <p>{popularShows[0].overview}</p>}
        <div>
          <button ><BiPlay />Play</button>
          <button >My List <AiOutlinePlus /></button>
        </div>
      </div>
      <Row title={"popular show on netflix"} arr={popularShows} />
      <Row title={"upcoming shows "} arr={upComingMovies} />
      <Row title={"Now Playing"} arr={upComingMovies} />
      <Row title={"top rated shows "} arr={upComingMovies} />
      <Row title={"latest shows "} arr={upComingMovies} />
      <div className="genreBox">
        {
          genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))
        }
      </div>

    </section>
  )
}


export default Home;