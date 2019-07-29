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
                {Object.values(blogs[id]).map(post => 
                <div>
                    {post.title}
                </div>
                )}
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