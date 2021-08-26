import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home(...args: any[]) {
  const [count, setCount] = useState(0)
  console.count('pages/home called')
  console.log('Home called with', args.length, 'items', args.map(arg => Object.keys(arg)));
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>

      <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
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

    </>
  )
}