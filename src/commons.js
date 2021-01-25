import {v1} from 'uuid'

const isEmpty = (value) => {
    return undefined === value || null === value || 0 === value.length
}

const clearEmptyParam = (queryParam) => {
    for (let key in queryParam) {
        let obj = queryParam[key]
        if (undefined === obj || null === obj) {
            delete queryParam[key]
        } else if (Object === obj.constructor) {
            if (Object.keys(obj).length === 0) {
                delete queryParam[key]
            } else {
                clearEmptyParam(obj)
            }
        } else if (String === obj.constructor) {
            if (isEmpty(obj)) {
                delete queryParam[key]
            }
        } else if (Array === obj.constructor) {
            if (obj.length === 0) {
                delete queryParam[key]
            } else {
                clearEmptyParam(obj)
            }
        }
    }
}

const cloneObject = (source) => {

    if (undefined === source || null === source) {
        return source
    }

    if (source.constructor === Date) {
        return new Date(source.getTime())
    }

    const result = source.constructor === Array ? [] : {}
    for (let key in source) {
        let value = source[key]
        if (typeof value === "object") {
            result[key] = cloneObject(value)
        } else if (typeof value === "function") {
            result[key] = value.bind(result)
        } else {
            result[key] = value
        }
    }
    return result
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

const DEVICE_REQUEST_HEAD_KEY = "X-Request-Device"
export default {
    isEmpty,
    cloneObject,
    clearEmptyParam,
    dataToRequestParameter,
    DEVICE_REQUEST_HEAD_KEY,
    getDeviceId: () => {
        let deviceId = localStorage.getItem(DEVICE_REQUEST_HEAD_KEY)
        if (isEmpty(deviceId)) {
            deviceId = v1().replace(/-/g, '')
            localStorage.setItem(DEVICE_REQUEST_HEAD_KEY, deviceId)
        }
        return deviceId
    },
    fullScreen: () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
        }
    },
    exitFullscreen: () => {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    },
    deviceWechat() {
        return /MicroMessenger/ig.test(window.navigator.userAgent)
    },
    deviceIOS() {
        return /Mac OS/i.test(window.navigator.userAgent)
    },
    deviceAndroid() {
        return /Android|Adr/i.test(window.navigator.userAgent)
    },
    deviceMobile(){
        return /Mobile/i.test(window.navigator.userAgent)
    }
}