import './App.css'
import IFCDate from './components/IFCDate/IFCDate'
import IFCCalendar from './components/IFCCalendar/IFCCalendar'
import { useEffect } from 'react'

function App() {
useEffect(() => {
    document.title = 'International Fixed Calendar'
  }, [])

  return (
    <div className="App">
      <IFCDate />
      <IFCCalendar />
    </div>
  )
}

export default App
