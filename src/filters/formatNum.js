/**
 * @method 格式化数字 k、w
 */
export default num => {
  if (num === null) return 0

  if (num >= 1000 && num < 10000) {
    return Math.round(num / 10) / 100 + 'k'
  }

  if (num >= 10000) {
    return Math.round(num / 100) / 100 + 'w'
  }

  return num
}
