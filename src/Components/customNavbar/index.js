import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './customNavbar.scss';

class CustomNavbar extends Component {
    render() {
        const { items } = this.props.data;
        const { uid, role, firstName, lastName } = this.props.user;
        return (
            <div className='custom-navbar'>
                <Navbar collapseOnSelect fixed='top' expand="md">
                    <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => this.props.setNextPage('/')}>ALBERT KONG</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            {items.map(i => {
                                if(!i.items) {
                                    return <Nav.Link key={i.name} onClick={() => this.props.setNextPage(i.link)}>{i.name}</Nav.Link>
                                }
                                else {
                                    return (
                                        <NavDropdown key={i.name} alignRight title={i.name}>
                                            {i.items.map(j => <NavDropdown.Item key={j.name} onClick={() => this.props.setNextPage(j.link)}>{j.name}</NavDropdown.Item>)}
                                        </NavDropdown>
                                    )
                                }
                            })}
                            {uid &&
                            <NavDropdown alignRight title={
                                (
                                role === 'boss' ? '♔' :
                                role === 'capo' ? '♖' :
                                role === 'member' ? '♘' : '♙'
                                ) + ' ' + firstName + ' ' + lastName}>
                                <NavDropdown.Item onClick={() => this.props.setNextPage('/user')}>User Portal</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {
                                    this.props.logoutUser();
                                    this.props.setNextPage('/')
                                }}>Sign Out</NavDropdown.Item>
                            </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.content.navbar,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        logoutUser: () => dispatch(actions.logoutUser()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomNavbar)