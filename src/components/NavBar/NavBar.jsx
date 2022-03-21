import React, {useState} from "react";
import './NavBar.css';
import { Box, ClickAwayListener} from "@mui/material";
import ALink from "../Atomic/ALink";
import AButton from "../Atomic/AButton";
import LoginIcon from '@mui/icons-material/Login';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';




function NavBar(){

    let mystyle = {
        navBarUl :{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            //overflow: 'hidden',
            backgroundColor: '#B37474',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        navBarLi: {
            //float: 'left'
        },
        navBarDiv:{
            display: 'flex'
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
                <div style={mystyle.navBarDiv}>
                    <li style={mystyle.navBarLi} className={"m-2"}>
                        <ALink  to="/" ><div style={mystyle.logoSite}><VideogameAssetIcon fontSize={"large"} /></div></ALink>
                    </li>
                    <li style={mystyle.navBarLi}>
                        <ALink styles={mystyle.navBarA} to="/" >Home</ALink>
                    </li>
                    <li style={mystyle.navBarLi}>
                        {/*<div className="dropdown">*/}

                        {/*    <ClickAwayListener onClickAway={handleClickAway}>*/}
                        {/*        <div>*/}

                        {/*            <AButton styles={mystyle.navBarA}  onClickButton={() => handleClick()} classNames="dropbtn">*/}
                        {/*                Menu*/}
                        {/*                <i className="fa fa-caret-down"></i>*/}
                        {/*            </AButton>*/}
                        {/*            {displayBlock ? (*/}
                        {/*                <Box>*/}
                        {/*                    <div className={['dropdown-content'].join(" ")} id="myDropdown">*/}
                        {/*                        <ALink to='/article'>Article</ALink>*/}
                        {/*                        <ALink to='/articles'>Articles</ALink>*/}
                        {/*                    </div>*/}
                        {/*                </Box>*/}
                        {/*            ) : null}*/}
                        {/*        </div>*/}
                        {/*    </ClickAwayListener>*/}
                        {/*</div>*/}
                        <ALink styles={mystyle.navBarA} to="/articles" >Articles</ALink>
                    </li>
                    <li style={mystyle.navBarLi}>
                        <ALink styles={mystyle.navBarA} to="/contact" >Contact</ALink>
                    </li>
                    <li style={mystyle.navBarLi}>
                        <ALink styles={mystyle.navBarA} to="/about" >A propos</ALink>
                    </li>
                </div>
                <div style={mystyle.navBarDiv}>
                    <li style={mystyle.navBarLi}>
                        <ALink styles={mystyle.navBarA} to="/login" >Se Connecter <LoginIcon/></ALink>
                    </li>
                </div>


            </ul>
        </nav>

    )

}



export default NavBar;