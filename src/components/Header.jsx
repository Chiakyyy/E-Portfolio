import React from 'react'

export default function Header(){
  return (
    <header>
      <div className="container">
        <nav>
          <div className="brand">Portfolio <strong>Mobile</strong></div>
          <div className="navlinks">
            <a href="#accueil">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
