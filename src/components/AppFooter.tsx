import React from 'react'

export default function AppFooter() {
  return <p>
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
