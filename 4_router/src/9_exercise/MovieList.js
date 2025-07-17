
import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json")
            .then(res => res.json())
            .then(json => {
                setMovies(json.data.movies);
                setLoading(false);
            })
            
            
    }, []);

    return (
        <div>
            <h2>영화 목록</h2>
            <ul>
                {movies.map((movie,idx) => (
                    <li key={idx} style={{ marginBottom: "20px" }}>
                        <p><strong>{movie.id}</strong> : {movie.title}</p>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
