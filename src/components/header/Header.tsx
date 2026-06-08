import './Header.css'


export function Header() {
  return (
    <div className='header'>
      <a href='#home-section' className='header-link' id='home-link'>Home</a>
      <a href='#about-section' className='header-link' id='about-link'>About</a>
      <a href='#skills-section' className='header-link' id='skills-link'>Skills</a>
      <a href='#projects-section' className='header-link' id='projects-link'>Projects</a>
      <a href='#contact-section' className='header-link' id='contact-link'>Contact</a>
    </div>
  )
}