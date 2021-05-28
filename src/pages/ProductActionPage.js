import React, {Component} from "react";
import callApi from "../utils/ApiCaller";
import {Link} from "react-router-dom";

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
        if (id){ // update
            callApi(`products/${id}`, "PUT", {
                code: txtCode,
                name: txtName,
                description: txtDescription,
                price: txtPrice,
                status: checkboxStatus
            }).then(response => {
                history.goBack();
            });
        } else {
            callApi("products", "POST", {
                code: txtCode,
                name: txtName,
                description: txtDescription,
                price: txtPrice,
                status: checkboxStatus
            }).then(response => {
                history.goBack();
            });
        }
    };

    componentDidMount() {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, "GET", null).then(response => {
                var data = response.data;
                this.setState({
                    id: data.id,
                    txtCode: data.code,
                    txtName: data.name,
                    txtDescription: data.description,
                    txtPrice: data.price,
                    checkboxStatus: data.status
                })
            });
        }
    }

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

export default ProductActionPage;