import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import actions from 'Store/actions';

import * as loadStyles from 'Utils/loadStyles';
import * as staticStyles from 'Utils/staticStyles'
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';

class Content extends Component {
    // componentWillMount() {
    //     if(window.location.pathname === '/') {
    //         window.location.hash = '#/'
    //     }
    //     window.addEventListener("hashchange", () => {this.props.setNextPage(window.location.hash.slice(1))});
    // }

    render() {
        const { curPage, nextPage } = this.props.content;
        const { pageLoadStyle, pageExitStyle } = loadStyles;
        const hiddenStyle = staticStyles.hiddenStyle;
        return (
            <section className='content'>
                <Motion
                defaultStyle={nextPage ? pageExitStyle.initial : pageLoadStyle.initial}
                style={nextPage ? pageExitStyle.final : pageLoadStyle.final}
                >
                    {({opacity}) => {
                    //transition into next page
                    if(nextPage && opacity === 0) {
                        this.props.setNextPage('');
                        // window.location.hash = '#' + nextPage; //†
                        return <Redirect push to={nextPage}/>; //∂
                    }
                    return (
                        <div style={{width: '100%', opacity: opacity}}>
                            {/* <div style={curPage !== '/' ? hiddenStyle : null}><LandingPage id={'home'} /></div>
                            <div style={curPage !== '/experience' ? hiddenStyle : null}><DisplayPage id={'experience'} /></div>
                            <div style={curPage !== '/education' ? hiddenStyle : null}><DisplayPage id={'education'} /></div> */}
                            <Route exact path='/' render={() => <LandingPage id={'home'} />} />
                            <Route exact path='/experience' render={() => <DisplayPage id={'experience'} />} />
                            <Route exact path='/education' render={() => <DisplayPage id={'education'} />} />
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
        content: state.content.content
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
