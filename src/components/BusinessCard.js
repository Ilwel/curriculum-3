import tecnologies from "../utils/tecnologies";
import perfil from '../assets/perfil.jpg';

export default function BusinessCard({ side, tecnologie, mouseClickCardTecItem }) {

    const { infos } = tecnologie;

    const mouseOverCardTecItem = (e) => {

        const isCard = e.target.classList.contains('c-card__tec-item');
        if(!isCard) return;

        e.target.classList.add("is-hover");
        const items = document.getElementsByClassName("c-card__tec-item");
        for (const item of items) {

            item.classList.add("is-blur");

        }
        e.target.classList.remove("is-blur");

    }
    const mouseLeaveCardTecItem = (e) => {

        const isCard = e.target.classList.contains('c-card__tec-item');
        if(!isCard) return;

        e.target.classList.remove("is-hover");
        const items = document.getElementsByClassName("c-card__tec-item");
        for (const item of items) {

            item.classList.remove("is-blur");

        }

    }

    const mouseOverProgressBar = (e) => {

        // e.target.classList.add("is-hover");
        const items = document.getElementsByClassName("c-card__knowledg-item");
        for (const item of items) {

            item.classList.add("is-blur");

        }
        e.target.classList.remove("is-blur");

    }
    const mouseLeaveProgressBar = (e) => {

        // e.target.classList.remove("is-hover");
        const items = document.getElementsByClassName("c-card__knowledg-item");
        for (const item of items) {

            item.classList.remove("is-blur");

        }

    }
    return (

        <div className="c-card">

            {side === "left" && (
                <>
                    <div className="c-card__about">
                        <img className="c-card__img" src={perfil} alt="imagem de perfil" />
                        <div className="c-card__infos left">

                            <h1 className="c-card__title">Ilwel Isaac</h1>
                            <h2 className="c-card__sub">Web developer</h2>
                            <p className="c-card__p">ilwelisaac@hotmail.com</p>
                            <p className="c-card__p">(85) 9 8105-0749</p>
                            <p className="c-card__p">Fortaleza, CE</p>

                        </div>

                    </div>


                    <div className="c-card__tec">
                        {tecnologies.map(item =>
                            <span
                                id={item.tag}
                                key={item.tag}
                                onMouseOver={e => mouseOverCardTecItem(e)}
                                onMouseLeave={e => mouseLeaveCardTecItem(e)}
                                onClick={e => mouseClickCardTecItem(e)}
                                className={`c-card__tec-item ${item.tag}`}>

                                {item.name}

                            </span>
                        )}
                    </div>

                    <p className="c-card__signature">Business Card</p>

                </>
            )}

            {side === "right" && (
                <>

                    <div className="c-card">

                        <h1 className="c-card__title">
                            {tecnologie.name}
                        </h1>
                        <h2 className="c-card__sub">
                            {infos.about}
                        </h2>

                        <ul className="c-card__knowledg">

                            {infos.knowledg.map(item => (
                                <li
                                    key={item.name + tecnologie.name}
                                    className="c-card__knowledg-item"
                                    onMouseOver={mouseOverProgressBar}
                                    onMouseLeave={mouseLeaveProgressBar}
                                >

                                    {item.name}
                                    <div
                                        className="c-card__progress-bar"
                                        style={
                                            {
                                                width: item.expertise
                                            }
                                        }
                                    >

                                    </div>
                                </li>))}

                        </ul>

                    </div>

                </>
            )}



        </div>

    )

}