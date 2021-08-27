import React from 'react'
import { Link } from 'react-router-dom'

function randomInRage(min:number, max:number) {
  return Math.floor( Math.random() * (max - min) + min )
}
export default function AppFooter() {
  return <p>
    <div>
      <Link to={`/users/${ randomInRage(1234, 5678) }`}><button>To random user</button></Link>
    </div>
    <a
      className="App-link"
      href="https://vitedge.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vitedge Docs
    </a>
    {' | '}
    <a
      className="App-link"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vite Docs
    </a>
  </p>
}
