import ContactIcon from '../../assets/icons/contact-icon.png'
import LinkedInIcon from '../../assets/icons/linkedin-icon.png'
import EmailIcon from '../../assets/icons/email-icon.png'
import PhoneIcon from '../../assets/icons/phone-icon.png'
import LocationIcon from '../../assets/icons/location-icon.png'
import ResumeIcon from '../../assets/icons/resume-icon.png'
import ResumePDF from '../../assets/Julius Brian Ipac - Resume.pdf'
import './ContactSection.css'


export function ContactSection() {
  return (
    <section id='contact-section'>
      <div className='section-header'>
        <img src={ContactIcon} className='section-icon' />
        <p className='section-title'>Contact</p>
      </div>

      <div className='section-content' id='contact-content'>
        <a href='https://www.linkedin.com/in/julius-ipac-748211391/' className='contact' id='linkedin'>
          <img src={LinkedInIcon} className='contact-icon' />
          julius-ipac-748211391
        </a>

        <a href='mailto:julius.brian.s.ipac@gmail.com' className='contact' id='email'>
          <img src={EmailIcon} className='contact-icon' />
          julius.brian.s.ipac@gmail.com
        </a>

        <a className='contact' id='phone'>
          <img src={PhoneIcon} className='contact-icon'/>
          (+63) 915 501 6088
        </a>

        <a className='contact' id='location'>
          <img src={LocationIcon} className='contact-icon' />
          Philippines
        </a>

        <a 
          href={ResumePDF}
          download='Julius Brian Ipac Resume'
          target="_blank"
          rel="noreferrer"
          className='contact'
          id='resume'
        >
          <img src={ResumeIcon} className='contact-icon' />
          Download Resume
        </a>
      </div>
    </section>
  )
}