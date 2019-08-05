import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import ReactMarkdown from 'react-markdown/with-html';

import * as staticStyles from 'Utils/staticStyles';
import './post.scss';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            curPanel: ''
        };
    };

    updateScreenDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentWillMount() {
        window.addEventListener("resize", this.updateScreenDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateScreenDimensions.bind(this));
    }

    render() {
        const { id, posts } = this.props;
        const postStyle = staticStyles.createPostStyle();
        const post = posts[id];
        if(!post) return <div/>
        return (
            <div className='post' id={id}>
                <div style={postStyle}>
                    <h1>{post.title}</h1>
                    <p><b>{post.subtitle}</b></p>
                    <small><i>Posted by {post.author} on {post.date}</i></small>
                    <hr/>
                    {post.image && console.log(post.image)}
                    <div>
                        <ReactMarkdown
                        source={post.content}
                        escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.blog.posts
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
)(Post);