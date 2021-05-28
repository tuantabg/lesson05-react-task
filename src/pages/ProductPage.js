import React, {Component} from "react";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import {connect} from "react-redux";
import callApi from "../utils/ApiCaller";
import {Link} from "react-router-dom";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    };

    componentDidMount() {
        callApi("products", "GET", null).then(response => {
            var products = response.data;
            this.setState({
                products: products
            })
        });
    };

    onDelete = (id) => {
        var {products} = this.state;
        callApi(`products/${id}`, "DELETE", null).then(response => {
            if (response.status === 200) { // OK
                var index = this.filterIndex(products, id);
                if (index !== -1) {
                    products.splice(index, 1);
                    this.setState({
                        products : products
                    });
                }
            }
        });
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
        var {products} = this.state;

        // var {products} = this.props;


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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);