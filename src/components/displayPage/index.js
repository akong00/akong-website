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
        const { categories } = this.props.data;
        
        return (
            <div className='display-page' id={id}>
                <Hero id={id}/>
                <h5 style={{cursor: 'pointer'}} onClick={() => this.props.setNextPage('/')}>Home</h5>
                {categories.map(category =>
                <div key={category.title} style={{margin: 20}}>
                    <h3 style={{marginLeft: 10}}>{category.title}</h3>
                    <hr/>
                    <Row>
                        {category.panels.map(panel => 
                        <Col key={panel.title} xs={12} md={6} style={{padding: 15}}>
                            <div style={{height: '90%', padding: 20, margin: 20, boxShadow: '0 0 10px rgb(70, 70, 70)'}}>
                                <a
                                href={panel.link}
                                target='_blank'
                                // rel='noopener noreferrer'
                                >
                                    <h4>{panel.title}</h4>
                                </a>
                                <pre><i>{panel.details}</i></pre>
                                <b>{panel.description}</b>
                                <hr/>
                                {panel.bulletPoints.map(p =>
                                    <p key={p}>• {p}</p>
                                )}
                            </div>
                        </Col>
                        )}
                    </Row>
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
        setNextPage: (nextPage) => dispatch(actions.setNextPage(nextPage))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayPage);