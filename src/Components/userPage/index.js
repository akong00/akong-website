import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';


import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import Hero from 'Components/hero';
import './userPage.scss';

class UserPage extends Component {
    render() {
        const { extraKeys, newPostFields, newPost } = this.props.data;
        if(!localStorage.getItem('uid')) return <Redirect push to='/'/>;
        return (
            <div className='user-page'>
                <div style={{width: '80%', margin: 'auto'}}>
                    <Hero id={'userPage'}/>
                    <div className='create-blog-post'>
                        <h2>Create Blog Post</h2>
                        <hr/>
                        <div className='input-fields'>
                            {newPostFields.map(f => {
                            switch(f.type) {
                                case 'single':
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <select onChange={e => this.props.setNewPost(f.name, e.target.value)} multiple={f.type === 'multiple'}>
                                                {f.values.map(v => <option key={v} value={v}>{v}</option>)}
                                            </select>
                                        </div>
                                    )
                                case 'multiple':
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <input type='text' onChange={e => this.props.setNewPost(f.name, e.target.value.replace(' ','').split(','))}/>
                                        </div>
                                    )
                                default:
                                    return (
                                        <div key={f.name}>
                                            <h4>{f.name}</h4>
                                            <input className={f.type === 'date' ? 'date-field' : null} type={f.type} onChange={e => this.props.setNewPost(f.name, e.target.value)}/>
                                        </div>
                                    )
                            }
                            })}
                            <h4>content</h4>
                            <SimpleMDE
                            className='blog-editor'
                            onChange={e => this.props.setNewPost('content', e)}
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
                        }}>Create Post</button>
                        <div style={{height: 80}}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.userPage
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