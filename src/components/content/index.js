import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as loadStyles from 'Utils/loadStyles';
import Home from 'Components/home';

class Content extends Component {
    render() {
        return (
            <section className='content'>
                <div style={{width: '100%'}}>
                    <Route exact path='/' render={() => <Home pageLoadStyle={loadStyles.pageLoadStyle} />} />
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        loadStyles: state.content.loadStyles,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Content)
);
