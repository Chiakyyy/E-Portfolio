import React from 'react'
export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} — Portfolio Mobile. Fabriqué avec React + Vite.</div>
      </div>
    </footer>
  )
}
