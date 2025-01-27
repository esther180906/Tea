import Logo from "../assets/logo.svg"
import LogoText from "../assets/logotext.svg"
import noti from "../assets/noti.svg"
import buscar from "../assets/buscar.svg"
import mais from "../assets/mais.svg"


export function Header() {
  return (
    <section>
        <header className="header">
            <div>
                <a href="/" className="logo">
                    <img src={Logo} alt="" onClick={(e) => handleNavigation(e, '/Home')}/>
                    <img src={LogoText} alt="" onClick={(e) => handleNavigation(e, '/Home')}/>
                </a>
            </div>

            <div className="menu">
                <ul>
                    <li> <a href="/">Home</a> </li>
                    <li><a href="/Sobre" onClick={(e) => handleNavigation(e, '/Sobre')}>Sobre</a></li>
                    <li><a href="/Materiais" onClick={(e) => handleNavigation(e, '/Materiais')}>Materiais</a></li>
                    <li><a href="/Participantes" onClick={(e) => handleNavigation(e, '/Participantes')}>Participantes</a></li>
                    <li><a href="/Descobrir" onClick={(e) => handleNavigation(e, '/Descobrir')} >Descobrir</a></li>
                    <li><a href="/Comprovacoes" onClick={(e) => handleNavigation(e, '/Comprovacoes')} >Comprovações</a></li>
                </ul>
            </div>

            <div className="opcoes">
                <img src={noti} alt="" />
                <img src={buscar} alt="" />
                <img src={mais} alt="" />
            </div>
        </header>

    </section>
    
  )
  
}

