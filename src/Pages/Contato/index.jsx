import { Header } from "../../components/Header";
import {ContactForm } from "../../components/ContactForm";
import './style.css'
import Head from '../../Helper/Head'
import contactSVG from '../../Assets/svgs/contact.svg'






export function Contato() {
    return (
        <>  
            <Head title="Contato" />
            <Header />
            <section id="contato" className="container">
                <div className="contact-banner">
                    <img src={contactSVG} alt="" />
                </div>
                <div className="icons">
                        <a href="https://www.linkedin.com/in/brunodarosavigel/"  target="_blank"><span className="fa fa-linkedin"></span></a>
                        <a href="https://www.instagram.com/brunovigel" target="_blank"><span className="fa fa-instagram"></span></a>
                        <a href="https://github.com/BrunoVigel"target="_blank"><span className="fa fa-github"></span></a>
                </div>
                <ContactForm />
            </section>
        </>
    )
}