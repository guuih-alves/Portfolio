

import './Projects.css'
import './../Button/Button.css'
import Photo1 from '../../assets/mosquito.webp'
import Photo2 from '../../assets/museu.jpg'
import Photo3 from '../../assets/spotify.png'
import Photo4 from '../../assets/twitter.png'

import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';


function Projects(){

        
    return (

        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Projetos</h2>
            </div>

            <div className='projects-grid'>
            <div className='project-card d-flex jc-center'>
                    <div className='thumb tertiary-background'>
                        <img id='image' src={Photo1}></img>
                        <p>O projeto consta em um game interativo onde usaurio terá de acertar moscas, fazendo com o mesmo treine sua resposta</p>
                        <a href="https://github.com/guuih-alves/Projeto_Mata_Mosquito"><button>Clique aqui</button></a>
                        </div>      
                 </div>


                 <div className='project-card d-flex jc-center'>
                    <div className='thumb tertiary-background'>
                        <img id='image' src={Photo2}></img>
                        <p>O projeto apresentar todas as informações relativas ao Museu Nacional</p>
                        <a href="https://github.com/guuih-alves/Projeto_Museu_Nacional"><button>Clique aqui</button></a>
                        </div>
                 </div>


                 <div className='project-card d-flex jc-center'>
                    <div className='thumb tertiary-background'>
                        <img id='image' src={Photo3}></img>
                        <p>Nesta aplicação o usuario poderá consultar e montar a playlist com suas musicas favoritas</p>
                        <a href="https://github.com/guuih-alves/Projeto_Spotify"><button>Clique aqui</button></a>
                        </div>
                 </div>

                 <div className='project-card d-flex jc-center'>
                    <div className='thumb tertiary-background'>
                        <img id='image' src={Photo4}></img>
                        <p>O projeto foca na interação onde usuarios onde os mesmos podem compartilhas atividades e se interarem entre si</p>
                        <a href="https://github.com/guuih-alves/Projeto_Twitter_Clone"><button>Clique aqui</button></a>
                 </div>
            </div>
        </div>

            <section className='sobre'>
                <h1>Sobre mim</h1>
                <div id='timeline' style={{ height: "350px" }}>
            <TimelineComponent orientation='Horizontal' >
                <ItemsDirective>
                  <ItemDirective  content='2012' oppositeContent=' Conclusão do Técnico em Eletrônica' />
                    <ItemDirective content='2019' oppositeContent='Conclusão do Bacharelado em Engenharia da Computação' />
                    <ItemDirective content='2021' oppositeContent='Projeto de automatização de sistemas embarcados' />
                    <ItemDirective content='2022' oppositeContent='Construção de APlicação para social media' />
                    <ItemDirective content='2024' oppositeContent='Certificação de English Level Upper Intermediare' />
                </ItemsDirective>
            </TimelineComponent>
      </div>
      </section>
    
       
    </div>

    
    
    )
}



export default Projects