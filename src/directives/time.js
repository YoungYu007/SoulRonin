/**
 * @method 获取当前时间戳
 */
function getUnix() {
  let date = new Date()
  return date.getTime()
}

/**
 * @method 获取今天0点0分0秒的时间戳
 */
function getTodayUnix() {
  let date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

/**
 * @method 获取今年1月1日0点0分0秒的时间戳
 */
function getYearUnix() {
  let date = new Date()
  date.setMonth(0)
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.getTime()
}

/**
 * @method 获取标准年月日
 * @param time
 */
function getLastDate(time) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return `${year}.${month}.${day}`
}

/**
 * @method 转换时间
 * @param timestamp 毫秒时间戳
 */
function getFormatTime(timestamp) {
  let now = getUnix() // 当前时间戳
  let today = getTodayUnix() // 今天0点时间戳
  let year = getYearUnix() // 今年0点时间戳
  let timer = (now - timestamp) / 1000 // 转换为秒级时间戳
  let tip = ''

  if (timer < 0) {
    tip = '刚刚'
  } else if (Math.floor(timer / 60) <= 0) {
    tip = '刚刚'
  } else if (timer < 60 * 60) {
    tip = Math.floor(timer / 60) + '分钟前'
  } else if (timer >= 60 * 60 && timestamp - today >= 0) {
    tip = Math.floor(timer / (60 * 60)) + '小时前'
  } else if (timer / (60 * 60 * 24) <= 31) {
    tip = Math.ceil(timer / (60 * 60 * 24)) + '天前'
  } else {
    tip = getLastDate(timestamp)
  }

  return tip
}

// 实时时间转换
export default {
  bind: function(el, binding) {
    el.innerHTML = getFormatTime(binding.value)
    el.__timeout__ = setInterval(function() {
      el.innerHTML = getFormatTime(binding.value)
    }, 60 * 1000)
  },
  unbind: function(el) {
    clearInterval(el.__timeout__)
    delete el.__timeout__
  }
}
