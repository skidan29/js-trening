import { Link } from 'react-router-dom'
import { tools } from '../tools.js'

export default function HomePage() {
  return (
    <div className="page">
      <h1 className="page__title">Органайзер</h1>
      <p className="page__subtitle">Выберите инструмент</p>
      <ul className="tool-grid">
        {tools.map((tool) => (
          <li key={tool.id}>
            <Link className="tool-card" to={tool.path}>
              <span className="tool-card__title">{tool.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
