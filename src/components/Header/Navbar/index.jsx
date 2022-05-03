import './style.css'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'



export function Navbar() {
    const [modal, setModal] = React.useState(false)

    const location = useLocation();


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
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projetos'>Projetos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contato'>Contato</NavLink>
                        </li>
                        <li>
                            <NavLink to='/skills'>Skills</NavLink>
                        </li>
                    </ul>
                </div> : null}
            </>
        )
    }

    function Nav() {
        return (<>
            {location.pathname == '/' ? 
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projetos'>Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contato'>Contato</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'>Skills</NavLink>
                    </li>
                </ul>
                <button onClick={handleClick}></button>
            </nav> : 
            <nav style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projetos'>Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contato'>Contato</NavLink>
                    </li>
                    <li>
                        <NavLink to='/skills'>Skills</NavLink>
                    </li>
                </ul>
                <button onClick={handleClick}></button>
            </nav>} 
        </>)
    }

    return(
        <>
            <Nav />
            <Modal />
        </>
    )
}