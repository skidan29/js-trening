import { useEffect, useState } from 'react'
import BackLink from '../components/BackLink.jsx'

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

export default function ClockPage() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timerId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="page">
      <BackLink />
      <h1 className="page__title">Часы</h1>
      <time className="clock-display" dateTime={now.toISOString()}>
        {formatTime(now)}
      </time>
    </div>
  )
}
