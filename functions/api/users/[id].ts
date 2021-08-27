import type { ApiEndpoint } from 'vitedge'

export default <ApiEndpoint>{
    handler(payload) {
        console.log('api/params', payload)
        const { params } = payload;
        return {
            data: {
                user: {
                    id: params?.id
                }
            }
        }
    }
}