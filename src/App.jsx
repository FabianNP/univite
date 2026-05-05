import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'
import LessonPage from './pages/LessonPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                                   element={<Home />} />
        <Route path="/curso/:courseId"                    element={<CoursePage />} />
        <Route path="/curso/:courseId/leccion/:lessonId"  element={<LessonPage />} />
      </Routes>
    </>
  )
}
