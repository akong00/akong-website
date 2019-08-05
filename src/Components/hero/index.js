import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hero extends Component {
    render() {
        // const { id } = this.props;
        const { title, subtitle } = this.props.data;
        
        return (
            <div className='hero'>
                <div style={{textAlign: 'center', marginTop: 20}}>
                    <h1>{title}</h1>
                    <h5>{subtitle}</h5>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.content.hero[ownProps.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hero);