import './featured.css';
import { ProjectCard } from '../components/projectCard';
export function Featured() {
  return (
    <div id="featuredSection" className="contentBlock">
      <section className="contentBody" id="featuredBody">
        <aside id="featuredInfo">
          <h1>Featured Projects</h1>
        </aside>
        <aside id="featuredProjects">
          <ProjectCard
            url="http://15.222.62.124"
            imageUrl="/images/projects/LDD.png"
            name="A competition of services"
            type="Academic Project"
            year="2024"
            description="A react js website comparing tv shows between cable television 
                         providers and streaming services. Deployed using AWS"
            languages={["NODE.JS", "REACT", "CSS"]}
          />
          <ProjectCard
            url="http://dawtrek.crcrobotics.com/"
            imageUrl="/images/projects/dawtrek.png"
            name="DawTrek Website"
            type="Club Project"
            year="2024"
            description="The 2024 website for the CRC robotics website 
                         themed around LCARS devices in Star Trek."
            languages={["NODE.JS", "REACT", "CSS"]}
          />
          <ProjectCard
            url="https://gitlab.com/csprojects3/winter2023project-solitaire"
            imageUrl="/images/projects/solitaire.png"
            name="Solitaire in Java"
            type="Academic Project"
            year="2023"
            description="A java console application for playing Solitaire. 
                         Made leveraging the concepts of inheritance and OOP principles"
            languages={["Java"]}
          />
        </aside>
      </section>
    </div>
  )
}
