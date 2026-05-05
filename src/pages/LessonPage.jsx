import { useParams, Link, useNavigate } from 'react-router-dom'
import { COURSES } from '../data/courses'
import styles from './LessonPage.module.css'

export default function LessonPage() {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()

  const course = COURSES.find(c => c.id === courseId)
  if (!course) return <NotFound />

  // Flatten all lessons for prev/next navigation
  const allLessons = course.modules.flatMap(m => m.lessons)
  const currentIndex = allLessons.findIndex(l => l.id === lessonId)
  const lesson = allLessons[currentIndex]
  if (!lesson) return <NotFound />

  const prevLesson = allLessons[currentIndex - 1] || null
  const nextLesson = allLessons[currentIndex + 1] || null

  // Find which module this lesson belongs to
  const parentModule = course.modules.find(m => m.lessons.some(l => l.id === lessonId))

  return (
    <div className={styles.layout}>

      {/* ── SIDEBAR ─────────────────────────────── */}
      <aside className={styles.sidebar}>
        <Link to={`/curso/${course.id}`} className={styles.sidebarBack}>
          ← {course.title}
        </Link>

        <div className={styles.sidebarContent}>
          {course.modules.map((mod, mi) => (
            <div key={mod.id} className={styles.sidebarModule}>
              <div className={styles.sidebarModTitle}>
                <span className={styles.sidebarModNum}>M{mi + 1}</span>
                {mod.title}
              </div>
              {mod.lessons.map((les, li) => {
                const isActive = les.id === lessonId
                return (
                  <Link
                    key={les.id}
                    to={`/curso/${course.id}/leccion/${les.id}`}
                    className={`${styles.sidebarLesson} ${isActive ? styles.sidebarLessonActive : ''}`}
                  >
                    <span className={styles.sidebarLesNum}>{mi + 1}.{li + 1}</span>
                    <span className={styles.sidebarLesTitle}>{les.title}</span>
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      </aside>

      {/* ── MAIN ────────────────────────────────── */}
      <main className={styles.main}>

        {/* VIDEO PLAYER */}
        <div className={styles.videoWrap}>
          <iframe
            key={lesson.videoId}
            className={styles.video}
            src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1&autoplay=1`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* LESSON INFO */}
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <span className={styles.modLabel}>
              {parentModule?.title}
            </span>
            <span className={styles.duration}>⏱ {lesson.duration}</span>
          </div>

          <h1 className={styles.lessonTitle}>{lesson.title}</h1>

          {/* PREV / NEXT */}
          <div className={styles.nav}>
            {prevLesson ? (
              <button
                className={`${styles.navBtn} ${styles.navBtnSecondary}`}
                onClick={() => navigate(`/curso/${course.id}/leccion/${prevLesson.id}`)}
              >
                ← Anterior
              </button>
            ) : <div />}

            {nextLesson ? (
              <button
                className={`${styles.navBtn} ${styles.navBtnPrimary}`}
                onClick={() => navigate(`/curso/${course.id}/leccion/${nextLesson.id}`)}
              >
                Siguiente →
              </button>
            ) : (
              <Link to={`/curso/${course.id}`} className={`${styles.navBtn} ${styles.navBtnPrimary}`}>
                Finalizar curso ✓
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', minHeight:'calc(100vh - 54px)', gap:'1rem',
      color:'var(--muted)', fontFamily:'var(--font-ui)' }}>
      <p>Lección no encontrada.</p>
      <Link to="/" style={{ color:'var(--accent)' }}>← Volver al inicio</Link>
    </div>
  )
}
