import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from 'store/actions'

import { Motion, spring } from 'react-motion'

import FluidSimulation from 'components/fluidSimulation'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    };

    handleMouseDown = () => {
        this.setState({open: !this.state.open});
    };

    handleTouchStart = (e) => {
        e.preventDefault();
        this.handleMouseDown();
    };

    render() {
        const { layer1 } = this.props.layers
        const style1 = {
            x: spring(this.state.open ? -200 : 200, {stiffness: 120, damping: 50}),
            y: spring(this.state.open ? -50 : 50, {stiffness: 120, damping: 50})
        }

        return (
            <div className='home'>
                <FluidSimulation />
                <p>Test Message</p>
                <button onClick={e => this.props.setLayer1(!layer1)}>
                    toggle layer 1
                </button>

                {layer1 &&
                    <p>layer 1 activated</p>
                }
                <button
                onMouseDown={this.handleMouseDown}
                onTouchStart={this.handleTouchStart}
                >
                Toggle
                </button>

                <Motion 
                style={style1}>
                    {({x, y}) =>
                    // children is a callback which should accept the current value of
                    // `style`
                    <div className="demo0">
                        <div
                        className="demo0-block" 
                        style={{
                            WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                            transform: `translate3d(${x}px, ${y}px, 0)`,
                        }}
                        >
                            test text
                        </div>
                    </div>
                    }
                </Motion>

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
