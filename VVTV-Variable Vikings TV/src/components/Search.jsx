import React from "react";

function Search({searchTerm, setSearchTerm}){
    return (
        <imput 
        type="text"
        placeholder="search by name, director or writter"
        value={searchTerm}
        onChange = {e => setSearchTerm(e.target.value)}
        />
    );

}
export default Search;