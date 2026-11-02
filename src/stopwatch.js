export function createStopwatchState() {
  return { status: 'idle', accumulatedMs: 0, startedAt: null }
}

export function getElapsedMs(state, now) {
  const runningMs = state.startedAt === null ? 0 : now - state.startedAt
  return state.accumulatedMs + runningMs
}

export function startStopwatch(state, now) {
  if (state.status === 'running') {
    return state
  }

  return { status: 'running', accumulatedMs: state.accumulatedMs, startedAt: now }
}

export function stopStopwatch(state, now) {
  if (state.status !== 'running') {
    return state
  }

  return {
    status: 'paused',
    accumulatedMs: state.accumulatedMs + (now - state.startedAt),
    startedAt: null,
  }
}

export function resetStopwatch() {
  return createStopwatchState()
}

export function formatStopwatch(ms) {
  const safeMs = Math.max(0, Math.floor(ms))
  const minutes = String(Math.floor(safeMs / 60000)).padStart(2, '0')
  const seconds = String(Math.floor(safeMs / 1000) % 60).padStart(2, '0')
  const centis = String(Math.floor(safeMs / 10) % 100).padStart(2, '0')
  return `${minutes}:${seconds}.${centis}`
}
