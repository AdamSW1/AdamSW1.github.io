import './project.css'
export function Project({url, imageUrl, name, type, year, description, languages }){
  return(
    <section className="projectCard">
      <a href={url}>
        <img src={imageUrl} alt={name}/>
        <section className="projectInfo">
        <p>{name}</p>
        </section>
      </a>
    </section>
  )
}