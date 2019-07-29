import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

// import link_svg from 'Images/link.svg';
import Hero from 'Components/hero';
import './displayPage.scss';
import * as styles from 'Utils/styleVariables.scss';

class Blog extends Component {
    render() {
        const { id } = this.props;
        
        return (
            <div className='blog' id={id}>
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.blog
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
)(Blog);