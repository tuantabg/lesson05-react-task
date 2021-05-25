import React, {Component} from "react";

class ProductActionPage extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <form>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="name_product">Tên Sản Phẩm
                                </label>
                                <input type="text"
                                       name="txtNameProduct"
                                       id="name_product"
                                       className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="describe_product">Mô Tả Sản Phẩm
                                </label>
                                <textarea  type="text" rows="4"
                                           name="txtDescribeProduct"
                                           id="describe_product"
                                           className="form-control"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold"
                                       htmlFor="price_product">Giá Sản Phẩm
                                </label>
                                <input type="number"
                                       name="txtPriceProduct"
                                       id="price_product"
                                       className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="d-block font-weight-bold"
                                       htmlFor="price_product">Trạng Thái
                                </label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="checkbox" id="inlineCheckbox1"
                                           name=""
                                           value=""
                                    />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Còn hàng</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductActionPage;