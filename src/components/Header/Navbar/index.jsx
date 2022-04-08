import './style.css'
import React from 'react'


export function Navbar() {
    const [modal, setModal] = React.useState(false)


    function handleClick() {
        setModal(!modal)
        console.log(modal)
    }

    function Modal() {
        return(
            <>
                {modal ? 
                <div className="modal">
                    <ul>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Contato</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    </ul>
                </div> : null}
            </>
        )
    }

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Contato</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                </ul>
                <button onClick={handleClick}></button>
            </nav>
            <Modal />
        </>
    )
}