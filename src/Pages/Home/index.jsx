import {Hero} from '../../Components/Hero'
import {Projetos} from '../../Components/Projetos'
import {Skills} from '../../Components/Skills'
import {Footer} from '../../Components/Footer'



export function Home() {
    return(
        <>
            <Hero />
            <Projetos />
            <Skills />
            <Footer />
        </>
    )
}