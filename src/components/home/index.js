import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions';

// import { Motion, spring } from 'react-motion';

import FluidSimulation from 'components/fluidSimulation';
import * as createStyles from 'utils/createStyles';
import './home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
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

    // handleMouseUp = () => {
    //     this.setState({open: !this.state.open});
    // };

    // handleTouchStart = (e) => {
    //     this.handleMouseDown();
    // };

    render() {
        const { panels } = this.props.data;
        // const style1 = {
        //     x: spring(this.state.open ? -200 : 200, {stiffness: 120, damping: 50}),
        //     y: spring(this.state.open ? -50 : 50, {stiffness: 120, damping: 50})
        // };

        return (
            <div className='home'>
                {panels.map(panel => {
                    let panelStyle = createStyles.createPanelStyle(panel.position)
                    let textContainerStyle = createStyles.createTextContainerStyle(panel.position)
                    let textStyle = createStyles.createTextStyle(panel.position)
                    return (
                        <div key={panel.title} style={panelStyle}>
                            <FluidSimulation 
                            {...panelStyle}
                            colorTheme={panel.colorTheme}
                            splatRadiusMultiplier={panel.position !== 'left' && panel.position !== 'right' ? 10 : 1}
                            />
                            <div className='description-text-container' style={textContainerStyle}>
                                <a href={panel.link}>
                                    <h3 style={textStyle}>{panel.title}</h3>
                                    <p>{panel.body}</p>
                                </a>
                                
                                
                            </div>
                        </div>
                    )
                })
                }
                
                {/* <div>
                    <FluidSimulation colorTheme={colorTheme}/>
                </div> */}
                {/* <button onClick={e => this.props.setLayer1(!layer1)}>
                    toggle layer 1
                </button>
                {layer1 &&
                    <p>layer 1 activated</p>
                }
                <button
                onClick={this.handleMouseUp}
                // onTouchEnd={this.handleMouseUp}
                >
                Toggle
                </button>

                <Motion 
                style={style1}
                >
                    {({x, y}) =>
                    // children is a callback which should accept the current value of
                    // `style`
                    <div className="test">
                        <div
                        className="test-block" 
                        style={{
                            WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                            transform: `translate3d(${x}px, ${y}px, 0)`,
                        }}
                        >
                            test text
                        </div>
                    </div>
                    }
                </Motion> */}

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.home,
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
