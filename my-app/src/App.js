import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar">
      <div class="container">
        <a href="#">Hulk</a>
        
        <a href="#" class="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>

    
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div class="search-bar">
          <input type="search" placeholder="Search" />
        </div>

       
        <div class="sample-wallpaper">
         
          <article class="wallpaper">
            <img src="./img/venom-1.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>

          
          <article class="wallpaper">
            <img src="./img/hulk-1.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>

          
          <article class="wallpaper">
            <img src="./img/venom-2.jpg" alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
      </div>
    </header>
    </div>
  
  );
}

export default App;
