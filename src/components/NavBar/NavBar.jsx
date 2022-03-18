import React, {useState} from "react";
import './NavBar.css';
import { Box, ClickAwayListener} from "@mui/material";
import ALink from "../Atomic/ALink";
import AButton from "../Atomic/AButton";




function NavBar(){

    let mystyle = {
        navBarUl :{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            //overflow: 'hidden',
            backgroundColor: '#B37474',
            display: 'flex',
            flexDirection: 'row'
        },
        navBarLi: {
            //float: 'left'
        },
        navBarA: {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
        },
        logoSite:{
            color: 'white'
        }
    }

    let [displayBlock, setDisplayBlock] = useState(false);

    const handleClick = () => {
        setDisplayBlock((prev) => !prev);
    };

    const handleClickAway = () => {
        setDisplayBlock(false);
    };


    return(
        <nav>
            <ul style={mystyle.navBarUl}>
                <li style={mystyle.navBarLi}>
                    <div style={mystyle.logoSite}>AG</div>
                </li>
                <li style={mystyle.navBarLi}>
                    <ALink styles={mystyle.navBarA} to="/" >Home</ALink>
                </li>
                <li style={mystyle.navBarLi}>
                    <div className="dropdown">

                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>

                                <AButton styles={mystyle.navBarA}  onClickButton={() => handleClick()} classNames="dropbtn">
                                    Menu
                                    <i className="fa fa-caret-down"></i>
                                </AButton>
                                {displayBlock ? (
                                    <Box>
                                        <div className={['dropdown-content'].join(" ")} id="myDropdown">
                                            <ALink to='/login'>Login</ALink>
                                            <ALink to='/article'>Article</ALink>
                                            <ALink to='/articles'>Articles</ALink>
                                        </div>
                                    </Box>
                                ) : null}
                            </div>
                        </ClickAwayListener>
                    </div>
                </li>
                <li style={mystyle.navBarLi}>
                    <ALink styles={mystyle.navBarA} to="/contact" >Contact</ALink>
                </li>
                <li style={mystyle.navBarLi}>
                    <ALink styles={mystyle.navBarA} to="/about" >A propos</ALink>
                </li>
            </ul>
        </nav>

    )

}



export default NavBar;