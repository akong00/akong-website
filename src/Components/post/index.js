import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col, ModalTitle } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import ReactMarkdown from 'react-markdown/with-html';

import blogs from 'Blogs';
import * as staticStyles from 'Utils/staticStyles';
import * as styles from 'Utils/styleVariables.scss';
import './post.scss';
import { createContentMargin } from '../../Utils/staticStyles';

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
        const { type, id } = this.props;
        const post = blogs[type][id];
        const postStyle = staticStyles.createPostStyle();

        return (
            <div className='post' id={id}>
                <div style={postStyle}>
                    <h1>{post.title}</h1>
                    <small><i>Posted by {post.author} on {post.date}</i></small>
                    <hr/>
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