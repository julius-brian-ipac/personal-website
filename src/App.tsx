import { Header } from './components/header/Header'
import { HomeSection } from './components/home/HomeSection'
import { AboutSection } from './components/about/AboutSection'
import { SkillsSection } from './components/skills/SkillsSection'
import { ProjectsSection } from './components/projects/ProjectsSection'
import { ContactSection } from './components/contact/ContactSection'

import './App.css'


function App() {
  return (
    <div>
      <Header />

      <div className='app-container'>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div >
    </div >
  )
}

export default App