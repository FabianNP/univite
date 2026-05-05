import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COURSES } from '../data/courses'
import styles from './Home.module.css'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#cursos') {
      document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const totalLessons = COURSES.reduce((acc, c) =>
    acc + c.modules.reduce((a, m) => a + m.lessons.length, 0), 0)

  return (
    <main>
      {/* ── HERO ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Generado con Inteligencia Artificial
        </div>

        <h1 className={styles.h1}>
          Aprende con<br /><em>Univite</em>
        </h1>

        <p className={styles.desc}>
          Cursos estructurados creados con IA para{' '}
          <strong>diferentes temas de interés</strong>.
          Explora finanzas, historia, tecnología y más —
          todo organizado para aprender a tu ritmo.
        </p>

        <a href="#cursos" className={styles.btn}
          onClick={e => { e.preventDefault(); document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' }) }}>
          Ver cursos →
        </a>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{COURSES.length}</span>
            <span className={styles.statLbl}>Cursos</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>{totalLessons}</span>
            <span className={styles.statLbl}>Lecciones</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>IA</span>
            <span className={styles.statLbl}>Claude · Anthropic</span>
          </div>
        </div>
      </section>

      {/* ── CURSOS ──────────────────────────────────── */}
      <section className={styles.section} id="cursos">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionTag}>Biblioteca de Conocimiento</div>
            <div className={styles.sectionTitle}>Mis Cursos</div>
          </div>
          <span className={styles.sectionCount}>
            {COURSES.length} curso{COURSES.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className={styles.grid}>
          {COURSES.map((course, i) => (
            <Link
              key={course.id}
              to={`/curso/${course.id}`}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>{course.emoji}</div>
                <span className={styles.cardTag}>{course.tag}</span>
              </div>
              <div className={styles.cardTitle}>{course.title}</div>
              <div className={styles.cardDesc}>{course.desc}</div>
              <div className={styles.cardFooter}>
                <span>📦 {course.modules.length} módulos · {
                  course.modules.reduce((a, m) => a + m.lessons.length, 0)
                } lecciones</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerLogo}>univite</span>
        Cursos creados con Inteligencia Artificial · Conocimiento sin límites
      </footer>
    </main>
  )
}
