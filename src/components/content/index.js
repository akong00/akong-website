import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import actions from 'Store/actions';

import * as loadStyles from 'Utils/loadStyles';
import * as staticStyles from 'Utils/staticStyles'
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';
import CustomNavbar from 'Components/customNavbar';
import Blog from 'Components/blog';

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
        // const hiddenStyle = staticStyles.hiddenStyle;
        return (
            <div className='content'>
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
                        <div>
                            <div className='navbar-container'>
                                {window.location.pathname !== '/' && 
                                <div style={{height: 56, opacity: nextPage === '/' ? opacity : 1}}>
                                    <CustomNavbar />
                                </div>
                                }
                            </div>
                            <div className='route-container' style={{width: '100%', opacity: opacity}}>
                                <Route exact path='/' render={() => <LandingPage id={'home'} />} />
                                <Route exact path='/experience' render={() => <DisplayPage id={'experience'} />} />
                                <Route exact path='/education' render={() => <DisplayPage id={'education'} />} />
                                <Route exact path='/activities' render={() => <DisplayPage id={'activities'} />} />
                                <Route exact path='/blogs/:type' render={({match}) => <Blog id={match.params.type}/>} />
                                <Route exact path='/blogs/post/:name' render={() => <div/>} />
                                {/* <div style={curPage !== '/' ? hiddenStyle : null}><LandingPage id={'home'} /></div>
                                <div style={curPage !== '/experience' ? hiddenStyle : null}><DisplayPage id={'experience'} /></div>
                                <div style={curPage !== '/education' ? hiddenStyle : null}><DisplayPage id={'education'} /></div> */}
                                
                            </div>
                        </div>
                        );
                    }}
                </Motion>
            </div>
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
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        setBlogType: (type) => dispatch(actions.setBlogType(type)),
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Content)
);
