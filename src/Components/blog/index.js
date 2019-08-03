import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown/with-html';

import Hero from 'Components/hero';
import * as styles from 'Utils/styleVariables.scss';
import './blog.scss';

class Blog extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        this.props.createPost(this.state);
    }
    componentWillMount() {
        this.props.getPosts({ type: this.props.type });
    }

    render() {
        const { type, posts } = this.props;
        return (
            <div className='blog' id={type}>
                <Hero id={type + 'Blogs'}/>
                <Row>
                {Object.keys(posts).map(postKey => {
                const post = posts[postKey];
                
                return (
                    <Col key={postKey} xs={12} md={6} style={{padding: 15}}>
                        <div className='post-container' style={{height: '90%', padding: 20, margin: 20, boxShadow: styles.boxShadow, overflowY: 'hidden'}}>
                            <Row>
                                {/* {post.img.src &&
                                <img style={{backgroundColor: styles.backgroundHoverColor, height: '5em', width: '5em', marginLeft: 15, borderRadius: 6}} src={post.img.src} alt={post.img.alt}/>
                                } */}
                                <Col>
                                {/*eslint-disable-next-line*/}
                                    <a href='#' onClick={() => this.props.setNextPage('post/' + type + '/' + postKey)}>
                                        <h4>{post.title}</h4>
                                    </a>
                                    <b>{post.subtitle}</b>
                                </Col>
                            </Row>
                            <Row style={{marginLeft: 0}}>
                            <pre style={{marginTop: 'auto', marginBottom: 'auto'}}><i>{post.date}</i></pre>
                            {post.tags.map(tag =>
                                <p
                                key={tag}
                                style={{
                                marginLeft: 5,
                                padding: '0 5px 0 5px',
                                boxShadow: styles.boxShadow,
                                border: '1px solid ' + styles.backgroundHoverColor,
                                borderRadius: 5
                                }}
                                >
                                    {tag}
                                </p>
                            )}
                            </Row>
                            <hr/>
                            <div
                            className='hoverable '
                            onClick={() => this.props.setNextPage('post/' + type + '/' + postKey)}
                            style={{
                            borderRadius: 3,
                            height: 200,
                            padding: 10,
                            overflowX: 'hidden',
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(255,255,255,0.1), rgba(255,255,255,0.4), ' + styles.textColor + ')',
                            }}
                            >
                                <ReactMarkdown
                                source={post.content}
                                escapeHtml={false}
                                />

                            </div>
                        </div>
                    </Col>
                );
                })}
                </Row>
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
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        createPost: (post) => dispatch(actions.createPost(post)),
        getPosts: (params) => dispatch(actions.getPosts(params))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);