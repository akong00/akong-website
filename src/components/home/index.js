import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Motion, spring } from 'react-motion';

import FluidSimulation from 'Components/fluidSimulation';
import * as staticStyles from 'Utils/staticStyles';

import './home.scss';

class Home extends Component {
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
        const { pageLoadStyle } = this.props;
        const { panels } = this.props.data;
        
        return (
            <Motion defaultStyle={pageLoadStyle.initial} style={pageLoadStyle.final}>
                {({opacity}) =>
                    <div className='container' style={{opacity: opacity}}>
                        {panels.map(panel => {
                            const panelStyle = staticStyles.createPanelStyle(panel.position);
                            const textContainerStyle = staticStyles.createTextContainerStyle(panel.position);
                            const textStyle = staticStyles.createTextStyle(panel.position);
                            const textMotionStyle = {fontMultiplier: spring(this.state.curPanel === panel.title ? 1.05 : 1)};

                            return (
                                <div key={panel.title} style={panelStyle} onMouseEnter={() => this.setState({curPanel: panel.title})}>
                                    <FluidSimulation
                                    {...panelStyle}
                                    colorTheme={panel.colorTheme}
                                    splatRadiusMultiplier={panel.position !== 'left' && panel.position !== 'right' ? 10 : 1}
                                    />
                                    <div className='description-text-container' style={textContainerStyle}>
                                        <Motion style={textMotionStyle}>
                                            {({fontMultiplier}) => 
                                                <div>
                                                    <a href={panel.link}>
                                                        <h3 style={{...textStyle, fontSize: textStyle.fontSize * fontMultiplier}}>
                                                            {panel.title}
                                                        </h3>
                                                    </a>
                                                    <div className='row'>
                                                        {panel.position === 'center' && panel.body.map(e =>
                                                            <a key={e.name} href={e.link} target='_blank'>
                                                                <p style={{...textStyle, fontSize: Math.floor(textStyle.fontSize / 2), maxWidth: '1em'}}>
                                                                    {e.name}
                                                                </p>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            }
                                        </Motion>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
            </Motion>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.home
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
