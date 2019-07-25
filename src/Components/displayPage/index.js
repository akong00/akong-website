import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

import Hero from 'Components/hero';
import './displayPage.scss';

class DisplayPage extends Component {
    render() {
        const { id, pageLoadStyle } = this.props;
        const { title, panels } = this.props.data;
        
        return (
            <div className='display-page'>
                <Hero id={id}/>
                <a href='/'>Home</a>
                <Row style={{margin: 10}}>
                    {panels.map(panel => 
                    <Col style={{padding: 20, margin: 40, boxShadow: '0 0 10px rgb(70, 70, 70)'}}>
                        <div>
                            <h4>{panel.title}</h4>
                            <i>{panel.timespace}</i><br/>
                            <b>{panel.description}</b>
                            {panel.bulletPoints.map(p =>
                                <p>• {p}</p>
                            )}
                        </div>
                    </Col>
                    )}
                </Row>
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