
export const calculateYears = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const year = 1000 * 60 * 60 * 24 * 365
  return Math.floor(diff / year)
}
