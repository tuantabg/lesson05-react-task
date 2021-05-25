import React, { Component } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import Products from "../components/Products";

class ProductContainer extends Component {
    render() {
        var {products} = this.props;
        console.log(products);

        return (
            <Products>

            </Products>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);