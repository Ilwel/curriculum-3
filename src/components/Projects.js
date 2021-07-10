import projects from "../utils/projects"

export default function Projects({ side }) {

    const mouseOverCard = (e) => {
        
        e.stopPropagation();
        e.target.classList.add("is-hover");
        const items = document.getElementsByClassName("c-card");
        for (const item of items) {

            item.classList.add("is-blur");
            console.log(item);

        }
        e.target.classList.remove("is-blur");
        

    }
    const mouseLeaveCard = (e) => {

        e.stopPropagation();
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
                            className="c-card"
                            onMouseOver={mouseOverCard}
                            onMouseLeave={mouseLeaveCard}
                        >
                            {item.name}
                            <div className="c-card__tags">

                                {item.tags.map(subItem =>
                                    
                                    <p className="c-card__tag">
                                        {subItem.name}
                                    </p>
                                
                                )}

                            </div>

                        </div>

                    )}
                </div>



            )}


        </>
    )

}