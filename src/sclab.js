import {v1} from 'uuid'
import axios from 'axios'

const DEVICE_REQUEST_HEAD_KEY = "X-Request-Device"

const isEmpty = (value) => {
    return undefined === value || null === value || 0 === value.length
}

const dataToRequestParameter = (data, prefix, suffix) => {

    if (undefined === prefix) {
        prefix = ""
    }

    if (undefined === suffix) {
        suffix = ""
    }

    let result = ""
    for (let key in data) {
        const obj = data[key]
        if (undefined === obj || null === obj) {
            continue
        }

        if (Object === obj.constructor) {
            result += dataToRequestParameter(obj, prefix + key + suffix + ".")
        } else if (Array === obj.constructor) {
            result += dataToRequestParameter(obj, prefix + key + suffix + "[", "]")
        } else {
            result += prefix + key + suffix
            result += "="
            if (Date === obj.constructor) {
                result += obj.getTime()
            } else {
                result += encodeURIComponent(obj)
            }
            result += "&"
        }
    }

    return result
}

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
        const result = dataToRequestParameter(data)
        return result.substr(0, result.length - 1)
    }]
})

const getDeviceId = () => {
    let deviceId = localStorage.getItem(DEVICE_REQUEST_HEAD_KEY)
    if (isEmpty(deviceId)) {
        deviceId = v1().replace(/-/g, '')
        localStorage.setItem(DEVICE_REQUEST_HEAD_KEY, deviceId)
    }
    return deviceId
}

instance.interceptors.request.use(body => {
    body.headers[DEVICE_REQUEST_HEAD_KEY] = getDeviceId()
    return body
})

export default {
    getDeviceId,
    getDevice: () => {

    },
    getPlatform: () => {

    },
    screenOrientation: (orientation) => {
        // No need to implement
    },
    backToIndex: () => {
        // No need to implement
    },
    clickBack: () => {
        // Need overwrite
    }
}