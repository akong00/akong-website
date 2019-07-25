import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';

import { Motion, spring } from 'react-motion';
import { Row, Col} from 'react-bootstrap';

import FluidSimulation from 'Components/fluidSimulation';
import * as staticStyles from 'Utils/staticStyles';

import './landingPage.scss';

class LandingPage extends Component {
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
        const { panels } = this.props.data;
        return (
            <div className='landing-page'>
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
                        splatRadiusMultiplier={panel.splatSize}
                        customOffsets={{
                            left: panelStyle.left ? panelStyle.left : 0,
                            top: panelStyle.top ? panelStyle.top : 0
                        }}
                        />
                        <div className='description-text' style={textContainerStyle}>
                            <Motion style={textMotionStyle}>
                                {({fontMultiplier}) =>
                                <div>
                                    <h3
                                    style={{...textStyle, fontSize: textStyle.fontSize * fontMultiplier}}
                                    onClick={() => this.props.setNextPage(panel.link)}
                                    >
                                        {panel.title}
                                    </h3>
                                    {panel.position === 'center' &&
                                    <Row className='justify-content-md-center'>
                                        {panel.body.map(e =>
                                        <a
                                        key={e.name}
                                        href={e.link}
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        >
                                            <p style={{
                                                ...textStyle,
                                                fontSize: Math.floor(textStyle.fontSize / 2) * fontMultiplier,
                                                maxWidth: '1em',
                                                cursor: 'pointer'
                                            }}>
                                                {e.name}
                                            </p>
                                        </a>
                                        )}
                                    </Row>
                                    }
                                </div>
                                }
                            </Motion>
                        </div>
                    </div>
                );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.landingPage[ownProps.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage);
