import React from "react";
import './Photo.css';

export default function photo(params) {
    console.log(params)
    return (
        <div>
            <img src={params.url} className="photo" alt={params.title}/>
        </div>
    )
}