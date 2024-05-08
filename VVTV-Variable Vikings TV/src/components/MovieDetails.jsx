import React, { useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";


function MovieList() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');


    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(r => r.json)
        .then(data => setMovies(data.movies));
    }, []);

    const filteredMovies = movies.filter(movie => 
        movie.name.toLowercase().include(searchTerm.toLowerCase()) && 
        (selectedGenre === '' || movie.genre === selectedGenre )
    );

    return (
        <div>
            <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)} >
            <option value="">All Movies</option>
            {movies.map(movie => (
                <option key={movie} value={movie}>{movies}</option>
            ))}
            </select>
            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
export default MovieList;