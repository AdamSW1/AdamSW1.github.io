/* eslint-disable react/prop-types */
import './project.css'
export function Project({ url, imageUrl, name, type, year, description, languages }) {
  return (
    <section className="projectCard">
      <a href={url} target="_blank">
        <section className="projectImage">
          <img src={imageUrl} alt={name} />
        </section>
        <section className="projectInfo">
          <h3 className="projectDetails">{year}, {type}</h3>
          <h2 className="projectName">{name}</h2>
          <section className="projectLanguages">
            {
              languages.map( lang =>{
                return(
                  <h4 key={lang}>{lang}</h4>
                )
              })
            }
          </section>
          <p>
            {description}
          </p>
        </section>
      </a>
    </section>
  )
}