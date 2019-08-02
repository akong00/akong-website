import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col, ModalTitle } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import ReactMarkdown from 'react-markdown/with-html';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import blogs from 'Blogs';
import * as staticStyles from 'Utils/staticStyles';
import * as styles from 'Utils/styleVariables.scss';
import { createContentMargin } from '../../Utils/staticStyles';
import './userPage.scss';

class UserPage extends Component {
    render() {
        return (
            <div className='user-page'>
                <div style={{width: '90%', margin: 'auto'}}>
                    <SimpleMDE />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        createPost: (post) => dispatch(actions.createPost(post)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);