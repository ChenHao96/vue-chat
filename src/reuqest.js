import axios from 'axios'
import commons from "./commons"

const instance = axios.create({
    timeout: 60000,
    baseURL: "/api",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [(data) => {
        if (undefined === data) {
            return ""
        }
        const result = commons.dataToRequestParameter(data)
        return result.substr(0, result.length - 1)
    }]
})

instance.interceptors.request.use(body => {
    body.headers[commons.DEVICE_REQUEST_HEAD_KEY] = commons.getDeviceId()
    return body
})

// instance.interceptors.response.use(response => {
//     return response
// }, err => {
//     return Promise.resolve(err)
// })

export default instance