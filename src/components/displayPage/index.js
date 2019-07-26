import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

// import link_svg from 'Images/link.svg';
import Hero from 'Components/hero';
import './displayPage.scss';

class DisplayPage extends Component {
    render() {
        const { id } = this.props;
        const { panels } = this.props.data;
        
        return (
            <div className='display-page'>
                <Hero id={id}/>
                <a href='/'>Home</a>
                <Row style={{margin: 10}}>
                    {panels.map(panel => 
                    <Col xs={12} md={6}>
                        <div style={{height: '90%', padding: 20, margin: 20, boxShadow: '0 0 10px rgb(70, 70, 70)'}}>
                            <a href={panel.link} target='_blank' rel='noopener noreferrer'>
                                <h4>{panel.title}</h4>
                            </a>
                            <i>{panel.details}</i><br/>
                            <b>{panel.description}</b>
                            <hr/>
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