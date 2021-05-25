import React, {Component} from "react";

class Products extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card">
                    <h5 className="card-header bg-primary text-white">Danh sách sản phẩm</h5>
                    <div className="card-body">
                        <table className="table table-bordered table-hover">
                            <thead className="text-center">
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Mã SP</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Mô Tả</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Trạng Thái</th>
                                <th scope="col">Hành Động</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;