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
import './customNavbar.scss';

class CustomNavbar extends Component {
    render() {

        return (
            <div className='custom-navbar'>
                <Navbar collapseOnSelect fixed='top' expand="lg">
                    <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => this.props.setNextPage('/')}>ALBERT KONG</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link onClick={() => this.props.setNextPage('/experience')}>Experience</Nav.Link>
                            <Nav.Link onClick={() => this.props.setNextPage('/education')}>Education</Nav.Link>
                            <Nav.Link onClick={() => this.props.setNextPage('/activities')}>Activities</Nav.Link>
                            <Nav.Link onClick={() => this.props.setNextPage('/blogs')}>Tech Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
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