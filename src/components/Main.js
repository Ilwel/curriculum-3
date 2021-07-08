import BusinessCard from "./BusinessCard"

export default function Main({ menu }){

    return(

        <main className="l-main">
            <aside className="c-hero">

                {menu[0] && <BusinessCard/>}
                {menu[1] && 'Projetos'}
                {menu[2] && 'Experiência'}

            </aside>

            <aside className="c-content">
            
                {menu[0] && 'Cartão de visita'}
                {menu[1] && 'Projetos'}
                {menu[2] && 'Experiência'}
            
            </aside>
        </main>

    )

}