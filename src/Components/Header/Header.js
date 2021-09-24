import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogout } from "react-google-login";
import GoogleLogin from 'react-google-login';
import { Avatar } from "@material-ui/core";

import {
    selectSignedIn,
    selectUserData,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";


const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const userData = useSelector(selectUserData);

    return (
        <div className='header'>
            <div className='header__left'>
                <Link to='/'>Turbo<span>Octane</span></Link>
            </div>
            <div className='header__right'>
                <div className='header__icons'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to='/Blog' onClick={closeMobileMenu}>
                            Blogs
                        </Link>
                        {/* <Link to='/SinglePost' onClick={closeMobileMenu}>
                            Auto-News
                        </Link> */}
                    </ul>
                    {!isSignedIn ?
                        <GoogleLogin
                            clientId="281276745694-0cf2f4h8i3skogae2qulfd6s25frppbv.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    className="auth__button"
                                >
                                    Login
                                </button>
                            )}
                            onSuccess={login}
                            onFailure={login}
                            isSignedIn={true}
                            cookiePolicy={"single_host_origin"}

                        /> : (
                            <div className="navbar__user__data">
                                <Avatar
                                    className="user"
                                    src={userData?.imageUrl}
                                    alt={userData?.name}
                                />
                                <h1 className="signedIn">{userData?.givenName}</h1>
                                <GoogleLogout
                                    clientId="281276745694-0cf2f4h8i3skogae2qulfd6s25frppbv.apps.googleusercontent.com"
                                    render={(renderProps) => (
                                        <button
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            className="auth__button"
                                        >
                                            Logout
                                        </button>
                                    )}
                                    onLogoutSuccess={logout}
                                />
                            </div>
                        )}
                    <div className='menu_icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header;