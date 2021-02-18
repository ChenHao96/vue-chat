import moment from 'moment'

const forMatDateTime = (value) => {
    if (undefined === value || "" === value) {
        return ""
    }
    return moment(value).format("YYYY-MM-DD HH:mm:ss")
}

const forMatDate = (value) => {
    if (undefined === value || "" === value) {
        return ""
    }
    return moment(value).format("YYYY-MM-DD")
}

const formatBetweenTime = (value) => {

    if (undefined === value || "" === value) {
        return ""
    }

    let time = Date.now()
    if (value > time || value < time - (7 * 86400000)) {
        return forMatDate(value)
    }

    time -= 86400000
    time -= time % 86400000
    time -= 28800000

    if (value > time) {
        return "昨天"
    }

    const week = moment(value).weekday()
    switch (week) {
        case 0:
            return "星期日"
        case 1:
            return "星期一"
        case 2:
            return "星期二"
        case 3:
            return "星期三"
        case 4:
            return "星期四"
        case 5:
            return "星期五"
        case 6:
            return "星期六"
    }

    // TODO:bug
    return value
}

export default {
    forMatDateTime, forMatDate, formatBetweenTime
}
