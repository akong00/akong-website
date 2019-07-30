import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

// import link_svg from 'Images/link.svg';
import Hero from 'Components/hero';
import blogs from 'Blogs';
import * as styles from 'Utils/styleVariables.scss';

class Blog extends Component {
    render() {
        const { id } = this.props;
        return (
            <div className='blog' id={id}>
                <Hero id={id + 'Blogs'}/>
                <Row>
                    {Object.keys(blogs[id]).map(postKey => {
                    const post = blogs[id][postKey];
                    return (
                        <Col key={postKey} xs={12} md={6} style={{padding: 15}}>
                            <div style={{height: '90%', padding: 20, margin: 20, boxShadow: styles.boxShadow}}>
                                <Row>
                                    {post.img.src &&
                                    <img style={{backgroundColor: styles.backgroundHoverColor, height: '5em', width: '5em', marginLeft: 15, borderRadius: 6}} src={post.img.src} alt={post.img.alt}/>
                                    }
                                    <Col>
                                        <a
                                        href={'post/' + postKey}
                                        >
                                            <h4>{post.title}</h4>
                                        </a>
                                        <pre><i>{post.details}</i></pre>
                                        <b>{post.subtitile}</b>
                                    </Col>
                                </Row>
                                <Row>
                                {post.tags.map(tag =>
                                    <p key={tag} style={{border: '1px solid ' + styles.backgroundHoverColor}}>{tag}</p>
                                )}
                                </Row>
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
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);