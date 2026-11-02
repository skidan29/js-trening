import { useEffect, useState } from 'react'
import BackLink from '../components/BackLink.jsx'
import {
  createStopwatchState,
  formatStopwatch,
  getElapsedMs,
  resetStopwatch,
  startStopwatch,
  stopStopwatch,
} from '../stopwatch.js'

export default function StopwatchPage() {
  const [state, setState] = useState(createStopwatchState)
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (state.status !== 'running') {
      return undefined
    }

    const timerId = setInterval(() => setNow(Date.now()), 50)
    return () => clearInterval(timerId)
  }, [state.status])

  function handleStart() {
    const timestamp = Date.now()
    setNow(timestamp)
    setState((current) => startStopwatch(current, timestamp))
  }

  function handleStop() {
    const timestamp = Date.now()
    setNow(timestamp)
    setState((current) => stopStopwatch(current, timestamp))
  }

  function handleReset() {
    setNow(Date.now())
    setState(resetStopwatch())
  }

  return (
    <div className="page">
      <BackLink />
      <h1 className="page__title">Секундомер</h1>
      <div className="stopwatch-display" role="timer" aria-live="off">
        {formatStopwatch(getElapsedMs(state, now))}
      </div>
      <div className="stopwatch-controls">
        <button
          className="stopwatch-button stopwatch-button--start"
          type="button"
          onClick={handleStart}
          disabled={state.status === 'running'}
        >
          Старт
        </button>
        <button
          className="stopwatch-button stopwatch-button--stop"
          type="button"
          onClick={handleStop}
          disabled={state.status !== 'running'}
        >
          Стоп
        </button>
        <button
          className="stopwatch-button stopwatch-button--reset"
          type="button"
          onClick={handleReset}
        >
          Сброс
        </button>
      </div>
    </div>
  )
}
