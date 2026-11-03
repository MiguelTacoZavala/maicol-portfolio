import './index.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Stack } from './components/sections/Stack'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { BackgroundLines } from './components/ui/BackgroundLines'

export default function App() {
  return (
    <>
      <BackgroundLines />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Stack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
