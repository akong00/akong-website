import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import actions from 'Store/actions';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import * as loadStyles from 'Utils/loadStyles';
import * as staticStyles from 'Utils/staticStyles'
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';
// import * as styles from 'Utils/styleVariables.scss'
import './customNavbar.scss';

class CustomNavbar extends Component {
    render() {
        const { items } = this.props.data;
        return (
            <div className='custom-navbar'>
                <Navbar collapseOnSelect fixed='top' expand="lg">
                    <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => this.props.setNextPage('/')}>ALBERT KONG</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            {items.map(i => {
                                if(!i.items) {
                                    return <Nav.Link onClick={() => this.props.setNextPage(i.link)}>{i.name}</Nav.Link>
                                }
                                else {
                                    return (
                                        <NavDropdown alignRight title={i.name}>
                                            {i.items.map(j => <NavDropdown.Item style={{textAlign: 'right'}} onClick={() => this.props.setNextPage(j.link)}>{j.name}</NavDropdown.Item>)}
                                        </NavDropdown>
                                    )
                                }
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.content.navbar
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomNavbar)