import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import actions from 'Store/actions';

import { Motion, spring } from 'react-motion';

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
        const { id, pageLoadStyle, pageExitStyle } = this.props;
        const { panels, nextPage } = this.props.data;
        
        return (
            <Motion
            defaultStyle={nextPage ? pageExitStyle.initial : pageLoadStyle.initial}
            style={nextPage ? pageExitStyle.final : pageLoadStyle.final}
            >
                {({opacity}) => {
                if(nextPage && opacity === 0) return <Redirect to={nextPage}/>;
                return (
                    <div className='landing-page' style={{opacity: opacity}}>
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
                                            <h3
                                            style={{...textStyle, fontSize: textStyle.fontSize * fontMultiplier}}
                                            onClick={() => this.props.setNextPage('landingPage', id, panel.link)}
                                            >
                                                {panel.title}
                                            </h3>
                                            <div className='row'>
                                                {panel.position === 'center' && panel.body.map(e =>
                                                <a
                                                key={e.name}
                                                href={e.link}
                                                rel="noopener noreferrer"
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
                                            </div>
                                        </div>
                                        }
                                    </Motion>
                                </div>
                            </div>
                        );
                        })}
                    </div>
                );
                }}
            </Motion>
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
        setNextPage: (componentId, id, nextPage) => dispatch(actions.setNextPage(componentId, id, nextPage)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage);
