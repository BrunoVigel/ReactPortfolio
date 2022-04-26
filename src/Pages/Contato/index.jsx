import { Header } from "../../components/Header";
import {ContactForm } from "../../components/ContactForm";
import './style.css'

export function Contato() {
    return (
        <>
            <Header />
            <section id="contato" className="container">
                <ContactForm />
            </section>
        </>
    )
}