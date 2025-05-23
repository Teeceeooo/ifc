import { type FC, useEffect, useState } from 'react';

type IFCDateProps = object

const IFCDate: FC<IFCDateProps> = () => {
 const [ifcDate, setIfcDate] = useState<string>('Loading...')
  const [gregorianDate, setGregorianDate] = useState<string>('')

  useEffect(() => {
    const today = new Date()
    const year = today.getFullYear()

    const gregorianWeekday = today.toLocaleDateString('en-US', { weekday: 'long' })
    const gregorianMonth = today.toLocaleDateString('en-US', { month: 'long' })
    const gregorianDay = today.getDate()
    setGregorianDate(`${gregorianWeekday}, ${gregorianMonth} ${gregorianDay}, ${year}`)

    const startOfYear = new Date(year, 0, 1)
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

    if ((!isLeapYear && dayOfYear === 365) || (isLeapYear && dayOfYear === 366)) {
      setIfcDate(`Year Day (outside the week), ${year}`)
      return
    }

    if (isLeapYear && dayOfYear === 170) {
      setIfcDate(`Leap Day (outside the week), ${year}`)
      return
    }

    const adjustedDay = isLeapYear && dayOfYear > 170 ? dayOfYear - 1 : dayOfYear

    const monthIndex = Math.floor((adjustedDay - 1) / 28)
    const dayInMonth = ((adjustedDay - 1) % 28) + 1
    const weekdayIndex = (dayInMonth - 1) % 7

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const ifcMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'Sol', 'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const weekday = weekdays[weekdayIndex]
    const monthName = ifcMonths[monthIndex]

    setIfcDate(`${weekday}, ${monthName} ${dayInMonth}, ${year}`)
  }, [])

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '1.25rem', marginBottom: '1rem' }}>
      <div><strong>Gregorian date is :</strong> {gregorianDate}</div>
      <div><strong>International Fixed Calendar date is:</strong> {ifcDate}</div>
    </div>
  )
}

export default IFCDate