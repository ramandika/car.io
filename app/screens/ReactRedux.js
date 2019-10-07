import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserToken } from '../actions/actions';

class ReactRedux extends React.Component {}

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactRedux);
