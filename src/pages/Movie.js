import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from 'react-icons/bs';
import './Movie.css';

const moviesKey = process.env.REACT_APP_KEY;
const moviesUrl = process.env.REACT_APP_URL;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

        const getMovie = async(url) => {
            const res = await fetch(url);
            const data = await res.json();
    
            setMovie(data);
        };

        const formatCurrency = (number) => {
            return number.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        };
        
        useEffect(() => {
            const movieUrl = `${moviesUrl}${id}?${moviesKey}`;
            getMovie(movieUrl)
        })

    return (
        <div className="movie-page">
            {movie && (
            <>
            <MovieCard movie={movie} showlink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2></BsWallet2>Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp></BsGraphUp>Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div className="info">
                <h3>
                    <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p className="description">{movie.overview}</p>
            </div>
            </> 
            )}
        </div>
    );
};

export default Movie;