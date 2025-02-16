
import { Link } from 'react-router-dom'
import ScrollProjeto from '../../utils/ScrollProjeto'


//ASSETS
import './Header.css'
import LogoLk from '../../assets/Linkedin.svg'
import Logogt from '../../assets/git.svg'


//COMPONENTES

function Header(){

    return (
        <header>
            <div className="container">
                <div className="d-flex al-center">
                    <nav>
                        <ul>
                           <li></li><Link onClick={{ScrollProjeto}} >Projetos</Link>
                           <li>Tecnologias</li>
                           <li>Sobre mim</li>

                      </ul>
                   </nav>
  
                    <div className="logo">
                       <Link to="https://www.linkedin.com/in/guilherme-alves-b62896255/"><img src={LogoLk} /></Link>
                       <Link to="https://github.com/guuih-alves"><img src={Logogt} /></Link>
                    </div>
                 </div> 
            </div>
        </header>
    )
}

export default Header