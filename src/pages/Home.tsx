import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import type { Context } from "vite-ssr/react/types";

export default function Home(ctx: Context, ...rest: any[]) {
  const [count, setCount] = useState(0)
  console.count('pages/home called')
  console.log('Home called with', ctx, ...rest);
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
    </>
  )
}
