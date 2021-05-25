import React, { Component } from "react";
import * as messages from "../constants/Message";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import PropType from "prop-types";
import Message from "./../components/contents/Message";


class MessageContainer extends Component {
    render() {
        var { message } = this.props;

        return (
            <Message message = { message }/>
        )
    };
}

MessageContainer.propType = {
    message : PropType.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message : state.message
    }
};

export default connect(mapStateToProps, null)(MessageContainer);