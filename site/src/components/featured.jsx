import './featured.css';
import {Project} from '../components/project';
export function Featured(){
  return(
    <div id="featuredSection" className="contentBlock">
      <section className="contentBody">
      <h1>Featured Projects</h1>
        <Project 
          url="http://dawtrek.crcrobotics.com/"
          imageUrl="./images/projects/dawtrek.png"
          name="Dawson Robotics"
        />
      </section>
    </div>
  )
}