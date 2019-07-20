import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from 'components/home';

class Content extends Component {
    render() {
        return (
            <section className='content'>
                <div>
                    <Route exact path='/' render={() => <Home />} />
                </div>
            </section>
        );
    }
}

// const mapStateToProps = state => {
//     return {};
// };

// const mapDispatchToProps = dispatch => {
//     return {};
// };

export default withRouter(Content);
