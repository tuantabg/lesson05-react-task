import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions/index";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtCode: "",
            txtName: "",
            txtDescription: "",
            txtPrice: "",
            checkboxStatus: ""
        }
    };

    onChangeInput = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    };

    onSave = (event) => {
        event.preventDefault();
        var {id, txtCode, txtName, txtDescription, txtPrice, checkboxStatus} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            code: txtCode,
            name: txtName,
            description: txtDescription,
            price: txtPrice,
            status: checkboxStatus
        }
        if (id){ // update
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    };

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txtCode: itemEditing.code,
                txtName: itemEditing.name,
                txtDescription: itemEditing.description,
                txtPrice: itemEditing.price,
                checkboxStatus: itemEditing.status
            })
        }
    };

    render() {
        var {txtCode, txtName, txtDescription, txtPrice, checkboxStatus} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="name_code">Mã Sản Phẩm
                                </label>
                                <input type="text"
                                       name="txtCode"
                                       id="name_code"
                                       className="form-control"
                                       value={txtCode}
                                       onChange={this.onChangeInput}
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="name_product">Tên Sản Phẩm
                                </label>
                                <input type="text"
                                       name="txtName"
                                       id="name_product"
                                       className="form-control"
                                       value={txtName}
                                       onChange={this.onChangeInput}
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="describe_product">Mô Tả Sản Phẩm
                                </label>
                                <textarea type="text" rows="4"
                                          name="txtDescription"
                                          id="describe_product"
                                          className="form-control"
                                          value={txtDescription}
                                          onChange={this.onChangeInput}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="price_product">Giá Sản Phẩm
                                </label>
                                <input type="number"
                                       name="txtPrice"
                                       id="price_product"
                                       className="form-control"
                                       value={txtPrice}
                                       onChange={this.onChangeInput}
                                />
                            </div>
                            <div className="form-group">
                                <label className="d-block font-weight-bold"
                                       htmlFor="price_product">Trạng Thái
                                </label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="checkbox" id="inlineCheckbox1"
                                           name="checkboxStatus"
                                           value={checkboxStatus}
                                           onChange={this.onChangeInput}
                                           checked={checkboxStatus}
                                    />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Còn hàng</label>
                                </div>
                            </div>
                            <Link to="/product-management" className="btn btn-info mr-2">Trở lại</Link>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actions.actEditProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actions.actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);