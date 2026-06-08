type ProjectProps = {
  id: string;
  title: string;
  role: string;
  description: string[];
  technologies: string;
  image: string;
  link: string;
  icon: string;
}


export function Project({ id, title, role, description, technologies, image, link, icon }: ProjectProps) {
  return (
    <div className='project' id={id}>
      <div className='project-details'>
        <span className='project-title'>
          {title}
        </span>

        <span className='project-role'>
          {role}
        </span>

        <span className='project-description'>
          {description.map((text) => {
            return <span key={crypto.randomUUID()}> - {text} <br /></span>
          })}
        </span>

        <div className='project-footer'>
          <span className='project-technologies'>{technologies}</span>
          <a href={link} className='project-link'>
            <img src={icon} className='project-icon' />
          </a>
        </div>
      </div>

      <div className='project-image-container'>
        <img src={image} className='project-image' />
      </div>
    </div>
  )
}