import React, { type FC } from 'react';
import './IFCCalendar.css'

const ifcMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'Sol', 'July', 'August', 'September', 'October', 'November', 'December'
]

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

type IFCCalendarProps = object

const IFCCalendar: FC<IFCCalendarProps> = () => {
 const currentYear = new Date().getFullYear()
  const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)

  return (
    <div className="calendar-container">
      {ifcMonths.map((month, index) => (
        <React.Fragment key={month}>

          <div className="month">
            <div className="month-name">{month}</div>
            <div className="weekdays">
              {weekdays.map((day) => (
                <div key={day} className="weekday">{day}</div>
              ))}
            </div>
            <div className="days-grid">
              {Array.from({ length: 28 }, (_, i) => (
                <div key={i + 1} className="day">{i + 1}</div>
              ))}
            </div>
          </div>

          {isLeapYear && index === 5 && (
            <div className="special-days">
              <div className="day special">Leap Day</div>
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="special-days">
        <div className="day special">Year Day</div>
      </div>
    </div>
  )
}

export default IFCCalendar