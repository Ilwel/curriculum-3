import BusinessCard from "./BusinessCard";
import Projects from "./Projects";
import tecnologies from "../utils/tecnologies";
import projects from "../utils/projects";
import { useState } from "react";

export default function Main({ menu }) {
    const [tecnologie, setTecnologie] = useState({ infos: { knowledg: [] } });
    const [project, setProject] = useState({});

    const mouseClickCardTecItem = (e) => {

        const { target: { id } } = e;
        const newTecnologie = tecnologies.find(item => item.tag === id);
        setTecnologie(newTecnologie);

    }

    const mouseClickProject = (e) => {

        const { currentTarget: { id } } = e;
        const newProject = projects.find(item => item.tag === id);
        setProject(newProject);

    }

    return (

        <main className="l-main">
            <aside className="c-hero">

                {menu[0] && (

                    <BusinessCard
                        side="left"
                        tecnologie={tecnologie}
                        mouseClickCardTecItem={mouseClickCardTecItem}
                    />

                )}
                {menu[1] && (

                    <Projects 
                        side="left"
                        project={project}
                        mouseClickProject={mouseClickProject}
                    />

                )}
                {menu[2] && 'Experiência'}

            </aside>

            <aside className="c-content">

                {menu[0] && (
                    <BusinessCard
                        side="right"
                        tecnologie={tecnologie}
                        mouseClickCardTecItem={mouseClickCardTecItem}
                    />
                )}
                {menu[1] && (
                    <Projects 
                        side="right"
                        project={project}
                        mouseClickProject={mouseClickProject}
                    />
                )}
                {menu[2] && 'Experiência'}

            </aside>
        </main>

    )

}