import React, {Component} from "react";
import {Link} from "react-router-dom";

class ProductItem extends Component {
    render() {
        var {product, index} = this.props;
        var statusName = product.status ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status ? "btn btn-success" : "btn btn-danger";

        return (
            <tr>
                <th className="align-middle text-center">{index +1}</th>
                <td className="align-middle text-center">{product.code}</td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">{product.description}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle text-center">
                    <span className={statusClass}>
                        {statusName}
                    </span>
                </td>
                <td className="align-middle text-center">
                    <Link to={`/product/${product.id}/edit`} className="btn btn-primary m-2"> Sửa</Link>
                    <button type="button" className="btn btn-danger m-2" onClick={()=> this.onDelete(product.id)}> Xóa</button>
                </td>
            </tr>
        )
    }

    onDelete = (id) => {
        if (confirm("Bạn chắc chắn muốn xóa ?")){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
}

export default ProductItem;