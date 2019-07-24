import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as loadStyles from 'Utils/loadStyles';
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';

class Content extends Component {
    render() {
        const { displayPage } = this.props.data;
        const pageProps = {
            pageLoadStyle: loadStyles.pageLoadStyle,
            pageExitStyle: loadStyles.pageExitStyle,
        };
        return (
            <section className='content'>
                <div style={{width: '100%'}}>
                    <Route exact path='/' render={() => <LandingPage {...pageProps} id={'home'} />} />
                    <Route exact path='/experience' render={() => <DisplayPage {...pageProps} id={'experience'} />} />
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.content
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
