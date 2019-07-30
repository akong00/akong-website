import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col, ModalTitle } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import ReactMarkdown from 'react-markdown/with-html';

import blogs from 'Blogs';
import * as styles from 'Utils/styleVariables.scss';
import './post.scss';

class Post extends Component {
    render() {
        const { type, id } = this.props;
        const post = blogs[type][id];
        return (
            <div className='post' id={id}>
                <div className='post-content'>
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