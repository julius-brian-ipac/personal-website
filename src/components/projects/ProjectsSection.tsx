import { Project } from './Project'

import ProjectsIcon from '../../assets/icons/projects-icon.png'

import FacebookIcon from '../../assets/icons/facebook-icon.png'
import GitHubIcon from '../../assets/icons/github-icon.png'
import ItchIcon from '../../assets/icons/itch-icon.png'
import WebIcon from '../../assets/icons/web-icon.png'

import PersonalWebsitePhoto from '../../assets/projects/personal-website.png'
import AWebBasedTestBedPhoto from '../../assets/projects/a-web-based-testbed.png'
import TracePhoto from '../../assets/projects/trace.png'
import GetVacPhPhoto from '../../assets/projects/getvacph.png'

import './ProjectsSection.css'


export function ProjectsSection() {
  return (
    <section id='projects-section'>
      <div className='section-header'>
        <img src={ProjectsIcon} className='section-icon' />
        <p className='section-title'>Projects</p>
      </div>

      <div className='section-content' id='projects-content'>
        <Project
          id='personal-website'
          title='Personal Website'
          role='Developer'
          description={[
            'My first React project, a simple website for me to showcase my skills and projects. This is also the first project I hosted using Render.',
            'Created using React and hosted using Render.',
            'Icons created using Aseprite.'
          ]}
          technologies='Render • React • Aseprite'
          image={PersonalWebsitePhoto}
          link=''
          icon={WebIcon}
        />

        <Project
          id='a-web-based-testbed'
          title='A Web-Based Testbed with Spatial Visualization Capabilities for IoT-Based Smart Systems'
          role='Device Implementation Head and REST API Testing Head'
          description={[
            'My undergraduate thesis project, a REST API with an accompanying web application that interacts with and displays data collected by multiple smart home devices.',
            'Handled the integration of six smart devices using Python, MQTT, Zigbee, ESPHome and Home Assistant.',
            'Conducted performance tests on the REST API using Python (for latency), Apache JMeter (for scalability), and RESTest (for reliability). The tests showed that the API had low latency (less than 500ms on average), was scalable up to 200 users, and had robust error handling.'
          ]}
          technologies='Docker • PostgreSQL • Python • NodeJS'
          image={AWebBasedTestBedPhoto}
          link='https://github.com/jmbabaran1/IoT1'
          icon={GitHubIcon}
        />

        <Project
          id='trace'
          title='Trace'
          role='Developer'
          description={[
            'A game I submitted as a project in one of my classes, a short visual novel and connect the dots game with a story about the effects of and ways of dealing with status anxiety.',
            'Created the game using the Godot game engine with the GDScript programming language.',
            'Created game assets using Aseprite.',
            'Playable on Itch.io.'
          ]}
          technologies='Godot • Aseprite'
          image={TracePhoto}
          link='https://scribblenauticaljb.itch.io/trace'
          icon={ItchIcon}
        />

        <Project
          id='getvacph'
          title='GetVac.ph'
          role='Graphic Designer - Publicity and Promotions'
          description={[
            'An initiative that aimed to spread information and clear misconceptions about vaccines through posting easy to understand infographics on Facebook.',
            'Collaborated with other graphic designers to establish a palette, logos, and visual identity for the project.',
            'Worked with researchers to create vector graphics and diagrams to be used in inforgraphics using Adobe Illustrator.'
          ]}
          technologies='Adobe Illustrator'
          image={GetVacPhPhoto}
          link='https://www.facebook.com/GetVac.ph'
          icon={FacebookIcon}
        />
      </div>
    </section>
  )
}