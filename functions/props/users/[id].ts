import type { EdgeProps } from 'vitedge/define'

export default <EdgeProps>{
  handler({ event, request, params = {}, query = {} }) {
    console.log('props/users/[id]')
    return {
      data: {
        server: true,
        msg: 'This is an EXAMPLE page ',
      },
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