import {v1} from 'uuid'
import axios from 'axios'

const DEVICE_REQUEST_HEAD_KEY = "X-Request-Device"
const ACCOUNT_LOGIN_TOKEN_KEY = "Account-Login-Token"

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
        return window.navigator.userAgent
    },
    getPlatform: () => {

        let result;
        if (/Mobile/i.test(window.navigator.userAgent)) {
            result = 20000
        } else {
            result = 10000
        }

        if (/Mac OS/i.test(window.navigator.userAgent)) {
            result += 100
        } else if (/Linux/i.test(window.navigator.userAgent)) {
            result += 200
        } else if (/Windows/i.test(window.navigator.userAgent)) {
            result += 300
        }

        switch (result) {
            case 10100:
                return "Mac"
            case 10200:
                return "Linux"
            case 10300:
                return "Windows"
            case 20100:
                return "IOS"
            case 20200:
                return "Android"
            case 20300:
                return "Windows Phone"
            default:
                return "PC"
        }
    },

    logout: () => {
        sessionStorage.removeItem(ACCOUNT_LOGIN_TOKEN_KEY)
        instance.get("/logout").then(_ => {
        }).catch(_ => {
        })
    },
    login: (param, callback) => {
        instance.post("/login", param).then(response => {
            if (response.data.success) {
                sessionStorage.setItem(ACCOUNT_LOGIN_TOKEN_KEY, response.data.data)
            }
            if (undefined !== callback && callback instanceof Function) {
                callback(response.data)
            }
        }).catch(_ => {
            if (undefined !== callback && callback instanceof Function) {
                callback({
                    success: false,
                    message: '请求异常'
                })
            }
        })
    },
    hasLogin: () => {
        const token = sessionStorage.getItem(ACCOUNT_LOGIN_TOKEN_KEY)
        return !isEmpty(token)
    },
    exit: () => {
        // No need to implement
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