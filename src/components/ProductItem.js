import React, {Component} from "react";

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status ? "btn btn-success" : "btn btn-danger";

        return (
            <tr>
                <th className="align-middle text-center">{index +1}</th>
                <td className="align-middle text-center">{product.id}</td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">{product.description}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle text-center">
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td className="align-middle text-center">
                    <button type="button" className="btn btn-primary m-2"> Sửa</button>
                    <button type="button" className="btn btn-danger m-2"> Xóa</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;