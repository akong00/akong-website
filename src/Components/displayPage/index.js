import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Store/actions';

import { Row, Col } from 'react-bootstrap';
import { Motion, spring } from 'react-motion';

// import link_svg from 'Images/link.svg';
import Hero from 'Components/hero';
import './displayPage.scss';
import * as styles from 'Utils/styleVariables.scss';

class DisplayPage extends Component {
    render() {
        const { id } = this.props;
        const { categories } = this.props.data;
        
        return (
            <div className='display-page' id={id}>
                <Hero id={id}/>
                {categories.map(category =>
                <div key={category.title} style={{margin: 20}}>
                    <h3 style={{marginLeft: 10}}>{category.title}</h3>
                    <hr/>
                    <Row>
                        {category.panels.map(panel => 
                        <Col key={panel.title} xs={12} md={6} style={{padding: 15}}>
                            <div style={{height: '90%', padding: 20, margin: 20, boxShadow: styles.boxShadow}}>
                                <Row>
                                    <img style={{backgroundColor: styles.backgroundHoverColor, height: '5em', width: '5em', marginLeft: 15, borderRadius: 6}} src={panel.img.src} alt={panel.img.alt}/>
                                    <Col>
                                        <a
                                        href={panel.link}
                                        target='_blank'
                                        // rel='noopener noreferrer'
                                        >
                                            <h4>{panel.title}</h4>
                                        </a>
                                        <pre><i>{panel.details}</i></pre>
                                        <b>{panel.description}</b>
                                    </Col>
                                </Row>
                                
                                <hr/>
                                {panel.bulletPoints.map(p =>
                                    <p key={p} style={{margin: 0}}>• {p}</p>
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