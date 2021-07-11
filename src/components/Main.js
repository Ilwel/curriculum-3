import BusinessCard from "./BusinessCard";
import Projects from "./Projects";
import Experience from "./Experience";
import tecnologies from "../utils/tecnologies";
import projects from "../utils/projects";
import experience from "../utils/experience";
import { useState } from "react";


export default function Main({ menu }) {

    const works    = experience.filter(item => item.work)
    const notWorks = experience.filter(item => !item.work)

    const [tecnologie, setTecnologie] = useState({ infos: { knowledg: [] } });
    const [project, setProject] = useState({});
    const [experienceType, setExperienceType] = useState("Formação Acadêmica");
    const [experienceCard, setExperienceCard] = useState("");

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

    const experienceTypeHandler = (e) => {

        const { target:{ id } } = e;
        if(id === "a") setExperienceType("Formação Acadêmica");
        else if(id === "b") setExperienceType("Experiência Secular");
    
    }

    const mouseClickExperience = (e) => {

        const { currentTarget:{ id } } = e;
        const newExperience = experience.find(item => item.id === id);
        setExperienceCard(newExperience);
        console.log(experienceCard)

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
                {menu[2] && <Experience 
                        side="left"
                        experienceTypeHandler={experienceTypeHandler}
                        experience={  experienceType === "Formação Acadêmica" ? notWorks : works}
                        experienceType={experienceType}
                        experienceCard={experienceCard}
                        mouseClickExperience={mouseClickExperience}

                    />}

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
                {menu[2] && (
                    <Experience 
                        side="right"
                        experienceTypeHandler={experienceTypeHandler}
                        experience={  experienceType ? works : notWorks}
                        experienceCard={experienceCard}
                        mouseClickExperience={mouseClickExperience}

                    />
                )}

            </aside>
        </main>

    )

}