import './Hero.css'
import './../Button/Button.css'
import { useState } from 'react'

function Hero(){


   // const lista = [];
    const [info, setInfo] = useState("");
    const handleClick = () => { setInfo(<ul>{myComponentList}</ul>);
    }
    const myList = ['Sistemas Embarcados', 'Rede Kinetch Mesh','Monitoramento de Telemtria','Sistema de radiocomunicação','Despacho eletrônico', 'Desenvolvimento de sistemas', 'Banco de Dados'];

    const myComponentList = [];
    for (const item of myList) {
    myComponentList.push(<li>{item}</li>);
   
    }
    
    return (


        <div className='hero d-flex al-center'>
            <div className='hero-text'>
                <h1>Engenharia de Computação | Tecnologia da Automação | Telecom | Desenvolvimento de Sistemas | Banco de Dados</h1>
                <p>Sou um profissional com mais de 12 anos de mercado, possuo sólida experiência e conhecimentos em Tecnologia de Automação, Tecnologia de Informação, Sistemas eletroeletrônicos e Telecomunicações.
                </p>
                <button onClick={handleClick}>Mais informações</button>
                <p>{info}</p>



            </div>
        </div>
    )
}

export default Hero