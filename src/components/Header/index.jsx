import {Navbar} from './Navbar'
import './style.css'

import { useLocation } from 'react-router-dom'

export function Header() {

const location = useLocation();



    return(
        <>
            {location.pathname == '/' ? 
            <header className="container">
                <Navbar />
            </header> : 
            <header className="container" style={{backgroundColor: 'black'}}>
                <Navbar />
            </header>}
        </>
    )
}
