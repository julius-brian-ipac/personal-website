import { Skill } from './Skill'

import SkillsIcon from '../../assets/icons/skills-icon.png'
import HTMLLogo from '../../assets/skills/html-5-logo.png'
import CSSLogo from '../../assets/skills/css-3-logo.png'
import JSLogo from '../../assets/skills/js-logo.png'
import TSLogo from '../../assets/skills/ts-logo.png'
import ReactLogo from '../../assets/skills/react-logo.png'
import CPPLogo from '../../assets/skills/cpp-logo.png'
import PythonLogo from '../../assets/skills/python-logo.png'
import NodeJSLogo from '../../assets/skills/nodejs-logo.png'

import './SkillsSection.css'


export function SkillsSection() {
  return (
    <section className='skills-section' id='skills-section'>
      <div className='section-header'>
        <img src={SkillsIcon} className='section-icon' />
        <p className='section-title'>Skills</p>
      </div>

      <div className='section-content' id='skills-content'>
        <Skill logo={HTMLLogo} name='HTML' />
        <Skill logo={CSSLogo} name='CSS' />
        <Skill logo={JSLogo} name='JavaScript' />
        <Skill logo={TSLogo} name='TypeScript' />
        <Skill logo={ReactLogo} name='React' />
        <Skill logo={CPPLogo} name='C++' />
        <Skill logo={PythonLogo} name='Python' />
        <Skill logo={NodeJSLogo} name='NodeJS' />
      </div>
    </section>
  )
}