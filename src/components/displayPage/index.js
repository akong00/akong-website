import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Motion, spring } from 'react-motion';

// import './displayPage.scss';

class DisplayPage extends Component {
    render() {
        const { id, pageLoadStyle } = this.props;
        const { title, panels } = this.props.data;
        
        return (
            <div className='display-page'>
                <a href='/'>Home</a>
                <h2>{title}</h2>
                {panels.map(panel => 
                <div>
                    <h4>{panel.title}</h4>
                    <h5>{panel.description}</h5>
                    {panel.bulletPoints.map(p =>
                    <p>{p}</p>
                    )}
                </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.displayPage[ownProps.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPage);