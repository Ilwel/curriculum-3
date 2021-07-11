
export default function Experience({ side, experienceTypeHandler, experience, experienceType, experienceCard, mouseClickExperience }) {

    const mouseOverCard = (e) => {

        const isCard = e.target.classList.contains('c-card');
        if (!isCard) return;

        e.target.classList.add("is-hover");
        const items = document.getElementsByClassName("c-card");
        for (const item of items) {

            item.classList.add("is-blur");

        }
        e.target.classList.remove("is-blur");


    }
    const mouseLeaveCard = (e) => {

        const isCard = e.target.classList.contains('c-card');
        if (!isCard) return;

        e.target.classList.remove("is-hover");
        const items = document.getElementsByClassName("c-card");
        for (const item of items) {

            item.classList.remove("is-blur");

        }


    }

    return (
        <>
            {side === "right" && (

                <div className="c-card c-experience-info" >

                    <div className="c-card__options">
                        <button id="a" onClick={experienceTypeHandler} className="c-card__see-more">Formação Acadêmica</button>
                        <button id="b" onClick={experienceTypeHandler} className="c-card__see-more">Experiência Secular</button>
                    </div>

                    <div className="c-card__sub">
                        {experienceCard.details}
                    </div>

                </div>
            )}

            {side === "left" && (

                <>
                    <div className="c-card">
                        <h1 className="c-card__title">{experienceType}</h1>
                        <div className="c-experience">

                            {experience.map(item => (
                                <div
                                    key={item.id}
                                    id={item.id}
                                    onMouseOver={mouseOverCard}
                                    onMouseLeave={mouseLeaveCard}
                                    onClick={mouseClickExperience}
                                    className="c-card"
                                >

                                    <h1 className="c-card__title">{item.name}</h1>
                                    <h2 className="c-card__sub">{item.time_course}</h2>
                                    <p className="c-card__p">{item.level}</p>

                                </div>
                            ))}

                        </div>

                    </div>

                </>

            )

            }
        </>
    )

}