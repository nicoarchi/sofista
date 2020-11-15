import React from 'react'
import "./styles.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import Logo from "../../assets/logo/sophistgreen.png"
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    return (
        <div className='header'>

            <Link to="/user">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>

            <Link to="/">
            <IconButton>
                <img className='header__logo' fontSize="large" alt="Sofista" src={Logo} />
            </IconButton>
            </Link>
            
            <Link to="/chat">
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            </Link>

        </div>
    )
}

export default Header
