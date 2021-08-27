import type { EdgeProps } from 'vitedge/define'

export interface PropData {
  server: boolean
  msg: string
}

export default <EdgeProps>{
  handler({ event, request, params = {}, query = {} }) {
    console.log('props/users/[id]', params, query)
    const data: PropData = {
      server: true,
      msg: `This is a props/users/[id] response for user ${params.id} `,
    };

    return {
      data,
      headers: {}, // Optional dynamic headers
      status: 200, // Optional status, default 200
    }
  },
  options: {
    cache: {
      api: 90, // Cache's max-age for the "get page props" request
      html: 90, // Cache's max-age for the actual rendered HTML
    },
    headers: {
      // static headers
    },
  },
}