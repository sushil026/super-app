import React, { useState } from "react";
import cat from "./Catagories.module.css";
import Selected from "../../components/Selected";
import NextPage from "../../components/NextPage";
import GenreCards from "../../components/GenreCards";
export default function Catagories() {
  
  const genreList = [
    { id: 1, title: 'Action', image: require('../../assets/action.jpg'), color: '#FF5209', selected: false},
    { id: 2, title: 'Drama', image: require('../../assets/drama.jpg'), color: '#D7A4FF', selected: false},
    { id: 3, title: 'Romance', image: require('../../assets/romance.jpg'), color: '#148A08', selected: false},
    { id: 4, title: 'Thriller', image: require('../../assets/thriller.jpg'), color: '#84C2FF', selected: false},
    { id: 5, title: 'Western', image: require('../../assets/western.jpg'), color: '#902500', selected: false},
    { id: 6, title: 'Horror', image: require('../../assets/horror.jpg'), color: '#7358FF', selected: false},
    { id: 7, title: 'Fantasy', image: require('../../assets/fantasy.jpg'), color: '#FF4ADE', selected: false},
    { id: 8, title: 'Music', image: require('../../assets/music.jpg'), color: '#E61E32', selected: false},
    { id: 9, title: 'Fiction', image: require('../../assets/fiction.jpg'), color: '#6CD061', selected: true}
  ];
  return (
    <div className={cat.app}>
      <div className={cat.text}>
        <div className={cat.content}>
          <h3>SuperApp</h3>
          <h2>Choose your entertainment category</h2>
          <div className={cat.selected}>
            {
              genreList.map((genre)=> (
                genre.selected ?
                <Selected title={genre.title}/> : ""
              ))
            }
          </div>
          <label>
            <span className= 'material-symbols-outlined'>warning</span>
            &nbsp;Minimum 3 category required
          </label>
        </div>
      </div>
      <div className={cat.genres}>
         <div className={cat.genreSelect}>
          {
            genreList.map((genre)=> (
              <GenreCards id={genre.id} title={genre.title} image={genre.image} color={genre.color} selected={genre.selected}
             />
            ))
          }
         </div>
         <NextPage/>
      </div>
    </div>
  );
}
