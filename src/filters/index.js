/**
 * @method 格式化数字 k、w
 */
export const formatterNum = num => {
  if (num === null) return 0

  if (num >= 1000 && num < 10000) {
    return Math.round(num / 10) / 100 + 'k'
  }

  if (num >= 10000) {
    return Math.round(num / 100) / 100 + 'w'
  }

  return num
}

/**
 * @method 格式化时间
 * @param 毫秒数
 * @return
 */
export const formatterTime = timestamp => {
  /**
    1分钟以内显示为：刚刚
    1小时以内显示为：N分钟前
    当天以内显示为：今天 N点N分（如：今天 22:33）
    昨天时间显示为：昨天 N点N分（如：昨天 10:15） 
    当年以内显示为：N月N日 N点N分（如：02月03日 09:33） 
    今年以前显示为：N年N月N日 N点N分（如：2000年09月18日 15:59）
   */

  let nowTimestamp = new Date().getTime()
  let timestampDiff = parseInt((nowTimestamp - timestamp) / 1000)

  let nowDate = new Date(nowTimestamp)
  let tmDate = new Date(timestamp)

  let year = tmDate.getFullYear()
  let month = tmDate.getMonth() + 1
  let day = tmDate.getDate()
  let hour = tmDate.getHours()
  let minute = tmDate.getMinutes()

  let nowYear = nowDate.getFullYear()
  let nowMonth = nowDate.getMonth() + 1
  let nowDay = nowDate.getDate()
  const zeroize = time_num => String(time_num).length === 1 ? `0${time_num}` : `${time_num}`

  if (timestampDiff < 60) {
    return '刚刚'
  } else if (timestampDiff < 3600) {
    return `${Math.floor(timestampDiff / 60)}分钟前`
  } else if (nowYear === year && nowMonth === month && nowDay === day) {
    return `今天 ${zeroize(hour)}:${zeroize(minute)}`
  } else {
    // 当前时间戳 加一天 转换成日期对象
    let tmpDate = new Date(nowTimestamp - 24 * 60 * 60 * 1000)
    let tmpYear = tmpDate.getFullYear()
    let tmpMonth = tmpDate.getMonth() + 1
    let tmpDay = tmpDate.getDate()

    if (tmpYear === year && tmpMonth === month && tmpDay === date) {
      return `昨天 ${zeroize(hour)}:${zeroize(minute)}`
    } else {
      return `${year}.${zeroize(month)}.${zeroize(day)} ${zeroize(hour)}:${zeroize(minute)}`
    }
  }
}