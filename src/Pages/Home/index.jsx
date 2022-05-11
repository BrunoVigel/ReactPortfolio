import {Hero} from '../../components/Hero'
import {Projetos} from '../../components/Projetos'
import {Skills} from '../../components/Skills'
import Head from '../../Helper/Head'
import contactSVG from '../../Assets/svgs/contact.svg'




export function Home() {
    return(
        <>
            <Head title="Home" />
            <Hero />
            <Projetos />
            <Skills />
        </>
    )
}