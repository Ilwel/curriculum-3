import projects from "../utils/projects"

export default function Projects({ side }) {

    const mouseOverCard = (e) => {
        
        const isCard = e.target.classList.contains('c-card');
        if(!isCard) return;

        e.target.classList.add("is-hover");
        const items = document.getElementsByClassName("c-card");
        for (const item of items) {

            item.classList.add("is-blur");

        }
        e.target.classList.remove("is-blur");
        

    }
    const mouseLeaveCard = (e) => {
        
        const isCard = e.target.classList.contains('c-card');
        if(!isCard) return;

        e.target.classList.remove("is-hover");
        const items = document.getElementsByClassName("c-card");
        for (const item of items) {

            item.classList.remove("is-blur");

        }
        

    }

    return (

        <>
            {side === "left" && (

                <div className="c-projects">
                    {projects.map(item =>

                        <div
                            key={item.name}
                            id={item.name}
                            className="c-card"
                            onMouseOver={mouseOverCard}
                            onMouseLeave={mouseLeaveCard}
                        >
                            {item.name}
                            <div className="c-card__tags">

                                {item.tags.map(subItem =>
                                    
                                    <p key={subItem.name + item.name} className="c-card__tag">
                                        {subItem.name}
                                    </p>
                                
                                )}

                            </div>

                        </div>

                    )}
                </div>

            )}

            {side === "right" && (
                <div className="c-card">
                    Alguma coisa aqui
                </div>
            )}


        </>
    )

}