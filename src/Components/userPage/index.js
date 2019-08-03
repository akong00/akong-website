import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col, ModalTitle } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';
import ReactMarkdown from 'react-markdown/with-html';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import blogs from 'Blogs';
import Hero from 'Components/hero';
import * as staticStyles from 'Utils/staticStyles';
import * as styles from 'Utils/styleVariables.scss';
import { createContentMargin } from '../../Utils/staticStyles';
import './userPage.scss';

class UserPage extends Component {
    render() {
        const { extraKeys, newPostFields, newPost } = this.props.data;
        return (
            <div className='user-page'>
                <div >
                    <Hero id={'userPage'}/>

                    <div className='create-blog-post'>
                        <h2>Create Blog Post</h2>
                        <hr/>
                        <div className='input-fields'>
                            {newPostFields.map(f => {
                            switch(f.type) {
                                case 'single':
                                    return (
                                        <div>
                                            <h5>{f.name}</h5>
                                            <select onChange={e => this.props.setNewPost(f.name, e.target.value)} multiple={f.type === 'multiple'}>
                                                {f.values.map(v => <option value={v}>{v}</option>)}
                                            </select>
                                        </div>
                                    )
                                case 'multiple':
                                    return (
                                        <div>
                                            <h5>{f.name}</h5>
                                            <input type='text' onChange={e => this.props.setNewPost(f.name, e.target.value.replace(' ','').split(','))}/>
                                        </div>
                                    )
                                default:
                                    return (
                                        <div>
                                            <h5>{f.name}</h5>
                                            <input type={f.type} onChange={e => this.props.setNewPost(f.name, e.target.value)}/>
                                        </div>
                                    )
                            }
                            })}
                            <SimpleMDE
                            className='blog-editor'
                            onChange={e => this.props.setNewPost('content', e)}
                            extraKeys={extraKeys}
                            />
                        </div>
                        <button onClick={() => this.props.createPost(newPost)}>Create Post</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.userPage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        createPost: (post) => dispatch(actions.createPost(post)),
        setNewPost: (field, data) => dispatch(actions.setNewPost(field, data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);