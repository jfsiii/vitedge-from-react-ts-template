import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div>

          <Link to={'/users/1234'}><button>To random user</button></Link>
        </div>
    </>
  )
}
