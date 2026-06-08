type SkillProps = {
  logo: string;
  name: string;
}


export function Skill({ logo, name }: SkillProps) {
  return (
    <div className='skill'>
      <img src={logo} className='skill-image' />
      <p className='skill-name'>{name}</p>
    </div>
  )
}