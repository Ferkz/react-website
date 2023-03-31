import './about.css'

function About (){
    return(
        <div class="sobre" id="sobre">
         <p class="sobre-h3">About Me:</p>
            <p>Formado em sistemas de informação, desejo atuar na área de desenvolvimento.<br/> Procurando uma 
            primeira oportunidade para atuar com desenvolvimento de software.  </p>
            <p class="formacao-h3">Training</p>
            <div class="grid-row">
                <div class="grid-row-1">Programador web
                    <p>Instituição: IFRO</p>
                    <span class="barra-progresso"></span>
                </div>
                <div class="grid-row-2">Programador de software
                    <p>Instituição:IFRO</p>
                    <span class="barra-progresso"></span>
        </div>
              <div class="grid-row-3">Sistemas de Informação
                   <p>Instituição: UNESA</p>
                   <span class="barra-progresso"></span>
              </div>
        </div>
</div>
    )
}
export default About