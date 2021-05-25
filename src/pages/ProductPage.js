import React,{Component} from "react";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import {connect} from "react-redux";
import axios from "axios";

class ProductPage extends Component{
    render() {
        var products = [];

        axios({
            method: 'GET',
            url: 'https://60ab7b4c5a4de40017cca31c.mockapi.io/api/products',
            data: null
        }).then(response =>{
            console.log(response);
            products = response.data;
        }).catch(error => {
            console.log(error);
        });

        // var {products} = this.props;


        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 mb-3">
                        <button type="button" className="btn btn-info">Thêm sản phẩm</button>
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
                    />
                )
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);