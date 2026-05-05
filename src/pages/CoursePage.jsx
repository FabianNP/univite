import { useParams, Link } from 'react-router-dom'
import { COURSES } from '../data/courses'
import styles from './CoursePage.module.css'

export default function CoursePage() {
  const { courseId } = useParams()
  const course = COURSES.find(c => c.id === courseId)

  if (!course) return (
    <div className={styles.notFound}>
      <p>Curso no encontrado.</p>
      <Link to="/">← Volver al inicio</Link>
    </div>
  )

  const totalLessons = course.modules.reduce((a, m) => a + m.lessons.length, 0)

  return (
    <main className={styles.main}>
      {/* ── HEADER ────────────────────────────────── */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.back}>← Todos los cursos</Link>
          <div className={styles.headerTop}>
            <div className={styles.icon}>{course.emoji}</div>
            <span className={styles.tag}>{course.tag}</span>
          </div>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.desc}>{course.desc}</p>
          <div className={styles.meta}>
            <span>📦 {course.modules.length} módulos</span>
            <span className={styles.dot}>·</span>
            <span>🎬 {totalLessons} lecciones</span>
          </div>
        </div>
      </div>

      {/* ── MÓDULOS ───────────────────────────────── */}
      <div className={styles.content}>
        <div className={styles.moduleList}>
          {course.modules.map((mod, mi) => (
            <div key={mod.id} className={styles.module}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleNum}>Módulo {mi + 1}</span>
                <h2 className={styles.moduleTitle}>{mod.title}</h2>
                <span className={styles.moduleCount}>{mod.lessons.length} lecciones</span>
              </div>

              <div className={styles.lessonList}>
                {mod.lessons.map((lesson, li) => (
                  <Link
                    key={lesson.id}
                    to={`/curso/${course.id}/leccion/${lesson.id}`}
                    className={styles.lesson}
                  >
                    <div className={styles.lessonLeft}>
                      <div className={styles.lessonNum}>{mi + 1}.{li + 1}</div>
                      <div>
                        <div className={styles.lessonTitle}>{lesson.title}</div>
                        <div className={styles.lessonDuration}>⏱ {lesson.duration}</div>
                      </div>
                    </div>
                    <span className={styles.lessonArrow}>▶</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
