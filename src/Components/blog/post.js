import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

// import link_svg from 'Images/link.svg';
import Hero from 'Components/hero';
import * as styles from 'Utils/styleVariables.scss';

class Post extends Component {
    render() {
        const { id } = this.props;
        
        return (
            <div className='post' id={id}>
                <h1></h1>
                <div>
                    <p>

                    </p>
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