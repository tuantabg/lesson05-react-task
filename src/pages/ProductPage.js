import React, {Component} from "react";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as actions from "../actions/index";

class ProductPage extends Component {

    componentDidMount() {
        this.props.onFetchProduct();
    };

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    filterIndex = (products,id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id){
                result = index
            }
        });
        return result;
    }

    render() {
        var {products} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 mb-3">
                        <Link to="/product/add" className="btn btn-info">Thêm sản phẩm</Link>
                    </div>
                    <Products>
                        {this.showProduct(products)}
                    </Products>
                </div>
            </div>
        )
    }

    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index}
                                 product={product}
                                 index={index}
                                 onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProduct: () => {
            dispatch(actions.actFitchProductRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actions.actDeleteProductRequest(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);