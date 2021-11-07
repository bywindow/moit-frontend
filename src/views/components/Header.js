/**
 * 상단 헤더 : 서비스 로고, 유저 아이콘
 */
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Dropdown,
    Navbar,
    NavItem,
    // NavLink,
    Nav,
    NavbarBrand,
    Collapse,
} from "reactstrap";
import * as s from './HeaderNavbarStyled';

function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const userClick = () => {
        alert("서비스 준비중입니다.")
    };

    return (
        <s.outsideStyle>
            <s.header className= "header-global">
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                        <s.logoContainer>
                                <s.logoStyle>moit</s.logoStyle>
                        </s.logoContainer>  
                    </NavbarBrand>
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                    onClick={() => userClick()}
                                >
                                    <span>
                                        <s.personIcon />
                                    </span>
                                </DropdownToggle>
                                
                            </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                
                </Navbar>
            </s.header>
        </s.outsideStyle>
    )
}

export default withRouter(Header);