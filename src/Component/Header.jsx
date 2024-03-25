import  {React} from 'react'
import logo from "../Logo/logo.png"
import {Link} from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'

import '../Css/Header.css'


const Header = ( ) =>{



    return(
        <nav className="header">
            <img src= {logo} alt ='Not found' />

            <div>
                <Link to="/tvshows">
                    TV shows
                </Link>

                <Link to="/tvshows">
                    Movies
                </Link>

                <Link to="/tvshows">
                    Recently
                </Link>

                <Link to="/tvshows">
                    My List
                </Link>
            </div>
            <input type='text' placeholder='search...'></input>
            <CiSearch/>
        </nav>
    )
}

export default Header;