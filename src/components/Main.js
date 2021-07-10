import BusinessCard from "./BusinessCard";
import tecnologies from "../utils/tecnologies";
import { useState } from "react";

export default function Main({ menu }) {
    const [tecnologie, setTecnologie] = useState({infos:{knowledg:[]}});

    const mouseclickCardTecItem = (e) => {

        const { target: { id } } = e;
        const newTecnologie = tecnologies.find(item => item.tag === id);
        setTecnologie(newTecnologie);
        console.log(tecnologie.name)

    }

    return (

        <main className="l-main">
            <aside className="c-hero">

                {menu[0] && (

                    <BusinessCard
                        side="left"
                        tecnologie={tecnologie}
                        mouseclickCardTecItem={mouseclickCardTecItem}
                    />

                )}
                {menu[1] && 'Projetos'}
                {menu[2] && 'Experiência'}

            </aside>

            <aside className="c-content">

                {menu[0] && (
                    <BusinessCard
                        side="right"
                        tecnologie={tecnologie}
                        mouseclickCardTecItem={mouseclickCardTecItem}
                    />
                )}
                {menu[1] && 'Projetos'}
                {menu[2] && 'Experiência'}

            </aside>
        </main>

    )

}