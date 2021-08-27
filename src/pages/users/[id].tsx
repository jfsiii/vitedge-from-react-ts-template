import React from 'react'
import type { Context } from "vite-ssr/react/types";
import { Helmet } from 'react-helmet-async'

const UserDetail = function UserDetail(ctx:Context) {
  console.log('pages/user/[id] called with', ctx);
  const fromPath = ctx.match.params.id;
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>User profile</title>
      </Helmet>

      <p>Hello, User {fromPath}</p>
    </>
  )
}

export default UserDetail;