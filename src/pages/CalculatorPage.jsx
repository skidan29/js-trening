import { useState } from 'react'
import BackLink from '../components/BackLink.jsx'

function calculate(first, second, operator) {
  switch (operator) {
    case '+':
      return first + second
    case '-':
      return first - second
    case '*':
      return first * second
    case '/':
      return first / second
    default:
      return second
  }
}

export default function CalculatorPage() {
  const [display, setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [error, setError] = useState(null)

  function reset() {
    setDisplay('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForOperand(false)
    setError(null)
  }

  function inputDigit(digit) {
    if (error) {
      reset()
      setDisplay(digit)
      return
    }

    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
      return
    }

    setDisplay(display === '0' ? digit : display + digit)
  }

  function inputDot() {
    if (error) {
      reset()
      setDisplay('0.')
      return
    }

    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  function chooseOperator(nextOperator) {
    if (error) {
      return
    }

    setFirstOperand(Number(display))
    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  function evaluate() {
    if (error || operator === null || firstOperand === null) {
      return
    }

    const secondOperand = Number(display)

    if (operator === '/' && secondOperand === 0) {
      setError('Ошибка: деление на ноль')
      setFirstOperand(null)
      setOperator(null)
      setWaitingForOperand(false)
      return
    }

    const result = calculate(firstOperand, secondOperand, operator)
    setDisplay(String(result))
    setFirstOperand(null)
    setOperator(null)
    setWaitingForOperand(true)
  }

  return (
    <div className="page">
      <BackLink />
      <h1 className="page__title">Калькулятор</h1>
      <div className="calculator">
        <div className="calc-display" role="status" aria-live="polite">
          {error ?? display}
        </div>
        <div className="calc-grid">
          <button className="calc-button calc-button--wide" type="button" onClick={reset}>
            C
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('7')}>
            7
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('8')}>
            8
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('9')}>
            9
          </button>
          <button className="calc-button calc-button--operator" type="button" onClick={() => chooseOperator('/')}>
            /
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('4')}>
            4
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('5')}>
            5
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('6')}>
            6
          </button>
          <button className="calc-button calc-button--operator" type="button" onClick={() => chooseOperator('*')}>
            *
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('1')}>
            1
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('2')}>
            2
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('3')}>
            3
          </button>
          <button className="calc-button calc-button--operator" type="button" onClick={() => chooseOperator('-')}>
            -
          </button>
          <button className="calc-button" type="button" onClick={() => inputDigit('0')}>
            0
          </button>
          <button className="calc-button" type="button" onClick={inputDot}>
            .
          </button>
          <button className="calc-button calc-button--equals" type="button" onClick={evaluate}>
            =
          </button>
          <button className="calc-button calc-button--operator" type="button" onClick={() => chooseOperator('+')}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}
