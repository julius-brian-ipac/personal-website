import ProfilePicture from '../../assets/profile-picture.jpg'

import './HomeSection.css'


export function HomeSection() {
  return (
    <section id='home-section'>
      <div className='home-content'>
        <img src={ProfilePicture} className='home-image' />
        <p>Julius Brian Ipac</p>
      </div>
    </section>
  )
}