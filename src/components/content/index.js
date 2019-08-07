import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Motion } from 'react-motion';
import actions from 'Store/actions';

import * as loadStyles from 'Utils/loadStyles';
import LandingPage from 'Components/landingPage';
import DisplayPage from 'Components/displayPage';
import CustomNavbar from 'Components/customNavbar';
import SignIn from 'Components/signIn';
import UserPage from 'Components/userPage';
import Blog from 'Components/blog';
import Post from 'Components/post';

class Content extends Component {
    componentWillMount() {
        this.props.getPosts({});
        this.props.setUser();
    }

    // componentWillUnmount() {
    //     this.props.setUser.destroy();
    // }

    render() {
        const { nextPage } = this.props.content;
        const { pageLoadStyle, pageExitStyle } = loadStyles;
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
                                <Route exact path='/s' render={() => <SignIn />} />
                                <Route exact path='/user' render={() => <UserPage />} />
                                <Route exact path='/blogs/:type' render={({match}) => <Blog type={match.params.type}/>} />
                                <Route exact path='/post/:type/:name' render={({match}) => <Post type={match.params.type} id={match.params.name} />} />
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
        getPosts: (query) => dispatch(actions.getPosts(query)),
        setUser: () => dispatch(actions.setUser()),
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Content)
);
