import AboutIcon from '../../assets/icons/about-icon.png'
import './AboutSection.css'


export function AboutSection() {
  return (
    <section id='about-section'>
      <div className='section-header'>
        <img src={AboutIcon} className='section-icon' />
        <p className='section-title'>About</p>
      </div>

      <div className='section-content' id='about-content'>
        <span id='about-text'>
          I am Julius Brian Silverio Ipac, a self-motivated developer with a strong interest in web development
          and game development. I love blending creative skills with technical skills, believing that the two must be
          balanced to create a memorable experience may it be in websites or games. You can find me at my happiest
          when I am thinking of how to make things more efficient, learning a new programming language or framework,
          tinkering with electronics, choosing a color palette for my next pixel artpiece, or yapping about my
          favorite shows and games.
        </span>

        <div id='about-keywords'>
          <p>Web Developer</p>
          <p>Game Developer</p>
          <p>Graphic Designer</p>
        </div>
      </div>
    </section>
  )
}