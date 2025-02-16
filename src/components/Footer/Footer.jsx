import { Link } from 'react-router-dom'


//ASSETS
import './Footer.css'
import LogoLk from '../../assets/Linkedin.svg'
import Logogt from '../../assets/git.svg'
import Logost from '../../assets/Subtract.png'


function Footer(){
 

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between al-center">
                    <div className='footer-cont'>
                        <div>                
                            <h1>Meu contato:</h1>
                            <p>(31)999905775</p>
                        </div>
                        
                        <div>
                            <h1>Email:</h1>
                            <p>guilherme.olv.05@gmail.com</p>
                        </div>
                    </div>

                    <div className='footer-col'>
                    <Link to="/"><img src={LogoLk} /></Link>
                    <Link to="/"><img src={Logogt} /></Link>
                    <Link to="/"><img src={Logost} /></Link>
                    </div>
                </div>
        </div>
 
        </footer>
    )
}

export default Footer