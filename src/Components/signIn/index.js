import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';
import { Row } from 'react-bootstrap';

import './signIn.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const { uid } = this.props.user;
        if(uid) return <Redirect push to='/user'/>;
        return (
            <div className='sign-in'>
                <div style={{textAlign: 'center'}}>
                    <Row className='justify-content-center' style={{textAlign: 'center', margin: 20}}>
                        <div>
                            <h4>Email</h4>
                            <input type='text' onChange={e => this.setState({email: e.target.value})}></input>
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type='password' onChange={e => this.setState({password: e.target.value})}></input>
                        </div>
                    </Row>
                    <button onClick={() => this.props.setUser(this.state.email, this.state.password)}>Sign In</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUser: (email, password) => dispatch(actions.setUser(email, password)),
        logoutUser: () => dispatch(actions.logoutUser()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);