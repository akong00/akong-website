import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';

import { Motion, spring } from 'react-motion';
import { Row } from 'react-bootstrap';

import FluidSimulation from 'Components/fluidSimulation';
import * as staticStyles from 'Utils/staticStyles';

import './landingPage.scss';
import styles from 'Utils/styleVariables.scss';

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
        const { id } = this.props;
        const { panels } = this.props.data;
        return (
            <div className='landing-page' id={id}>
                {panels.map(panel => {
                const isCurPanel = this.state.curPanel === panel.title;
                const panelStyle = staticStyles.createPanelStyle(panel.position);
                const textContainerStyle = staticStyles.createTextContainerStyle(panel.position);
                const textStyle = staticStyles.createTextStyle(panel.position);
                const textMotionStyle = {fontMultiplier: spring(isCurPanel ? 1.05 : 1)};
                return (
                    <div
                    className='panel'
                    onClick={() => this.props.setNextPage(panel.link)}
                    key={panel.title}
                    style={panelStyle}
                    onMouseEnter={() => this.setState({curPanel: panel.title})}
                    onMouseLeave={() => this.setState({curPanel: ''})}
                    >
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
                                    <h3 style={{...textStyle, fontSize: textStyle.fontSize * fontMultiplier, color: isCurPanel && panel.position !== 'center' && styles.hoverColor}}>
                                        {panel.title}
                                    </h3>
                                    {panel.position === 'center' &&
                                    <div>
                                        <img style={{width: '5%', height: '5%', marginBottom: '1%', border: '2px solid ' + styles.textColor2, borderRadius: 4, boxShadow: '0 0 10px 10px ' + styles.shadowColor}} src={panel.img.src} alt={panel.img.alt}/>
                                        <Row className='justify-content-center' style={{width: panelStyle.width, margin: '0 auto 0 auto'}}>
                                        {panel.body.map(e =>
                                            <a
                                            onClick={e => e.stopPropagation()}
                                            key={e.name}
                                            href={e.link}
                                            // eslint-disable-next-line
                                            target='_blank'
                                            // rel='noopener noreferrer'
                                            >
                                                <p style={{
                                                    ...textStyle,
                                                    margin: 0,
                                                    fontSize: Math.floor(textStyle.fontSize / 2) * fontMultiplier,
                                                    maxWidth: '1em',
                                                    cursor: 'pointer'
                                                }}>
                                                    {e.name}
                                                </p>
                                            </a>
                                            )}
                                        </Row>
                                    </div>
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
