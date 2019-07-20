import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from 'store/actions';

class Home extends Component {
    render() {
        const { layer1 } = this.props.layers
        return (
            <div className='home'>
                <p>Test Message</p>
                <button onClick={e => this.props.setLayer1(!layer1)}>
                    toggle layer 1
                </button>
                {layer1 &&
                    <p>layer 1 activated</p>
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        layers: state.content.home,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLayer1: (data) => dispatch(actions.setLayer1(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
