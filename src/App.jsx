import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ClockPage from './pages/ClockPage.jsx'
import CalculatorPage from './pages/CalculatorPage.jsx'
import StopwatchPage from './pages/StopwatchPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clock" element={<ClockPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/stopwatch" element={<StopwatchPage />} />
    </Routes>
  )
}
