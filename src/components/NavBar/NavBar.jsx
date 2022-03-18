import React, {useState} from "react";
import './NavBar.css';
import { Box, ClickAwayListener} from "@mui/material";
import ALink from "../Atomic/ALink";




function NavBar(){

    let mystyle = {
        navBarUl :{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            //overflow: 'hidden',
            backgroundColor: '#333',
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
                    <ALink styles={mystyle.navBarA} to="/" >Home</ALink>
                </li>
                <li style={mystyle.navBarLi}>
                    <div className="dropdown">

                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <button style={mystyle.navBarA} onClick={() => handleClick()} className="dropbtn">News
                                    <i className="fa fa-caret-down"></i>
                                </button>
                                {displayBlock ? (
                                    <Box>
                                        <div className={['dropdown-content'].join(" ")} id="myDropdown">
                                            <ALink to="/contact">Contacter nous</ALink>
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
                    <ALink styles={mystyle.navBarA} to="/about" >About</ALink>
                </li>
            </ul>
        </nav>

    )

}



export default NavBar;