import './style.css'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <p>Entre em contato comigo</p>
                <a href="https://api.whatsapp.com/send?phone=+555195569237"> <span className="fa fa-whatsapp"></span> Whatsapp</a>
            </div>
            <p>2022. Todos os direitos reservados.</p>
        </footer>
    )
}