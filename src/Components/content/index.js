import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import actions from 'Store/actions';

import * as loadStyles from 'Utils/loadStyles';
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';

class Content extends Component {
    render() {
        const nextPage = this.props.nextPage;
        const { pageLoadStyle, pageExitStyle } = loadStyles;

        return (
            <section className='content'>
                <Motion
                defaultStyle={nextPage ? pageExitStyle.initial : pageLoadStyle.initial}
                style={nextPage ? pageExitStyle.final : pageLoadStyle.final}
                >
                    {({opacity}) => {
                    if(nextPage && opacity === 0) {
                        this.props.setNextPage('');
                        return <Redirect to={nextPage}/>;
                    }
                    return (
                        <div style={{width: '100%', opacity: opacity}}>
                            <Route exact path='/' render={() => <LandingPage id={'home'} />} />
                            <Route exact path='/experience' render={() => <DisplayPage id={'experience'} />} />
                        </div>
                    );
                    }}
                </Motion>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        nextPage: state.content.nextPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage))
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Content)
);
