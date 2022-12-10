import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MovieGrid.css';

const moviesKey = process.env.REACT_APP_KEY;
const moviesUrl = process.env.REACT_APP_URL;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const getTopMovies = async (moviesUrl) => {
        const res = await fetch(moviesUrl);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topUrl = `${moviesUrl}top_rated?${moviesKey}`;
        getTopMovies(topUrl);

    }, [])



    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>carrengando</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )

};

export default Home;