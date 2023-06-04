import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StyledHeader } from "./styles";
// import { ReactComponent as OfferIcon } from '../../assets/svg/localOfferIcon.svg';
// import { ReactComponent as ExploreIcon } from '../../assets/svg/exploreIcon.svg';
// import { ReactComponent as PersonOutlineIcon } from '../../assets/svg/personOutlineIcon.svg';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    };

    return (
        <StyledHeader>
            <ul>
                <li className='navbarListItem' onClick={() => navigate("/")}>
                    {
                        <div
                            fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
                            width='36px'
                            height='36px'
                        />
                    }
                    <p
                        className={
                            pathMatchRoute("/")
                                ? "navbarListItemNameActive"
                                : "navbarListItemName"
                        }
                    >
                        Home
                    </p>
                </li>
                <li
                    className='navbarListItem'
                    onClick={() => navigate("/about")}
                >
                    {
                        <div
                            fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
                            width='36px'
                            height='36px'
                        />
                    }
                    <p
                        className={
                            pathMatchRoute("/")
                                ? "navbarListItemNameActive"
                                : "navbarListItemName"
                        }
                    >
                        About
                    </p>
                </li>
            </ul>
        </StyledHeader>
    );
};

export default Header;
