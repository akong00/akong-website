import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';

import { Row } from 'react-bootstrap';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import Hero from 'Components/hero';
import './userPage.scss';
import * as styles from 'Utils/styleVariables.scss';

class UserPage extends Component {
    render() {
        const { extraKeys, newPostFields, newPost } = this.props.data;
        const posts = this.props.posts;

        if(!localStorage.getItem('uid')) return <Redirect push to='/'/>;
        return (
            <div className='user-page'>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Hero id={'userPage'}/>
                    <div className='unpublished-blog-posts'>
                        <h2>Unpublished Posts</h2>
                        <hr/>
                        {Object.values(posts).map(post => {
                        if(!post.published) {
                            return (
                                <Row style={{margin: 5}}>
                                    <p style={{color: styles.h1Color}}>{post.title}</p>
                                    <button style={{padding: 2, marginLeft: 15, height: 30}} onClick={() => this.props.setNewPost(post)}>
                                        Edit
                                    </button>
                                </Row>
                            )
                        }
                        else return null;
                        })}
                    </div>
                    <div className='create-blog-post'>
                        <h2>Create Blog Post</h2>
                        <hr/>
                        <input type="file" onChange={e => this.props.setNewPostField('image', e.target.files[0])}/>
                        <div className='input-fields'>
                            {newPostFields.map(f => {
                            switch(f.type) {
                                case 'single':
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <select value={newPost[f.name]} onChange={e => this.props.setNewPostField(f.name, e.target.value)} multiple={f.type === 'multiple'}>
                                                {f.values.map(v => <option key={v} value={v}>{v}</option>)}
                                            </select>
                                        </div>
                                    )
                                case 'multiple':
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <input type='text' value={newPost[f.name]} onChange={e => this.props.setNewPostField(f.name, e.target.value.replace(' ','').split(','))}/>
                                        </div>
                                    )
                                default:
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <input className={f.type === 'date' ? 'date-field' : null} value={newPost[f.name]} type={f.type} onChange={e => this.props.setNewPostField(f.name, e.target.value)}/>
                                        </div>
                                    )
                            }
                            })}
                            <h4>content</h4>
                            <SimpleMDE
                            value={newPost.content}
                            className='blog-editor'
                            onChange={e => this.props.setNewPostField('content', e)}
                            extraKeys={extraKeys}
                            />
                        </div>
                        <button
                        className='submit-button'
                        onClick={() => {
                            let flag = true;
                            Object.values(newPost).map(v => {
                                if(!v) flag = false;
                                return 0;
                            });
                            if(flag) this.props.createPost(newPost);
                            else window.alert('Fill out all fields for blog post!');
                        }}>Save Changes</button>
                        <div style={{height: 80}}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.userPage,
        posts: state.blog.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        createPost: (post) => dispatch(actions.createPost(post)),
        setNewPost: (post) => dispatch(actions.setNewPost(post)),
        setNewPostField: (field, data) => dispatch(actions.setNewPostField(field, data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);