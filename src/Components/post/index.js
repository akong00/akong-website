import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';
import { Row, Carousel } from 'react-bootstrap';

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
        const { id, posts, user } = this.props;
        const postStyle = staticStyles.createPostStyle();
        const post = posts[id];
        if(!post) return <div/>
        return (
            <div className='post' id={id}>
                <div style={postStyle}>
                    <h1>{post.title}</h1>
                    <p><b>{post.subtitle}</b></p>
                    <Row style={{margin: 0}}>
                        <small><i>Posted by {post.author} on {post.date}</i></small>
                        {(user.role === 'boss' || user.role === 'capo') &&
                        <button onClick={() => {
                            this.props.setNewPost(post);
                            this.props.setNextPage('/user');
                        }}
                        style={{
                            marginLeft: 30,
                            marginTop: -5,
                        }}>
                            Edit
                        </button>
                        }
                    </Row>
                    
                    <hr/>
                    {post.images &&
                    <Carousel interval={null}>
                        {post.images.map(img =>
                        <Carousel.Item>
                            <img style={{width: '100%'}} src={img.src} alt={img.alt}/>
                        </Carousel.Item>
                        )}
                    </Carousel>
                    }
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
        posts: state.blog.posts,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
        setNewPost: (post) => dispatch(actions.setNewPost(post)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);