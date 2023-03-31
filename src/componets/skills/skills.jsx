import './skills.css'
import js from '../../img/js.png'
import ts from '../../img/typescript.png'
import nodejs from '../../img/nodejs.png'
import css from '../../img/css.png'
import html5 from '../../img/html5.png'
import react from '../../img/react.png'
function Skills(){
    return(
        <div class="soft-skill" id='soft-skill'>
            <p class="soft-skills-title">Soft Skills</p>
            <div className="soft-skills">
                <img className='javascript' src={js} alt="JavaScript" />
                <img className='typescript' src={ts} alt="TypeScript" />
                <img className='nodejs' src={nodejs} alt="NodeJs" />
                <img className='css' src={css} alt="Css" />
                <img className='html5' src={html5} alt="Html" />
                <img className='react' src={react} alt="React" />   
            </div>
        </div>
    )
}

export default Skills