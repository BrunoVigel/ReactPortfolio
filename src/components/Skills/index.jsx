import "./style.css";
import { NavLink } from "react-router-dom";
import {SkillCard} from '../../Pages/SkillsPage'


const HomeSkills = [SkillCard[2], SkillCard[4], SkillCard[7]]

export function Skills() {
  return (
    <section className="container" id="skills">
      <h2>Skills</h2>
      <div className="cards">
        {Object.entries(HomeSkills).map(([key, value]) => {
          return(
            <div className="card" key={key}>
              <img src={value.image.source} alt="" />
              <dl>{value.title}</dl>
              <dd>
                {value.definition}
              </dd>
            </div>
          )
        })}
        
      </div>
      <NavLink to="/skills">Ver mais</NavLink>
    </section>
  );
}
