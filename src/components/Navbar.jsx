import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/courses'
import styles from './Navbar.module.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <span className={styles.dot} />
        univite
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/#cursos" className={styles.link}>
            📚 Cursos
          </Link>
        </li>

        {/* ── ENLACES EXTRA DESDE data/courses.js ── */}
        {NAV_LINKS.map(link => (
          <li key={link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                {link.label}
              </a>
            ) : (
              <Link to={link.href} className={styles.link}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
