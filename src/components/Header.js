
export default function Header({ handler }) {

    return (

        <header className="l-header">
            <aside className="c-menu">
                
                <span className="c-menu__item" id="0" onClick={ e => handler(e) }>Cartão de Visita</span>
                <span className="c-menu__item" id="1" onClick={ e => handler(e) }>Projetos</span>
                <span className="c-menu__item" id="2" onClick={ e => handler(e) }>Experiência</span>
            
            </aside>
            <aside className="c-social">
                <a href="https://github.com/Ilwel" target="_blank" rel="noreferrer" className="c-social__item">Github</a>
                <a href="https://www.linkedin.com/in/ilwel/" target="_blank" rel="noreferrer" className="c-social__item">Linkedin</a>
                <a href="https://www.instagram.com/_ilwel/" target="_blank" rel="noreferrer" className="c-social__item">Instagram</a>
            </aside>

        </header>

    )

}