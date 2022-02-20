import React from 'react'
import './productRow.css'

class ProductRow extends React.Component{
    render(){
        return(
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'Product-out-of-stock'}>
                        {this.props.product.name}
                    </span>
                
                </td>
                {/* <td>{this.props.product.category}</td> */}
                <td>{this.props.product.price}</td>
                <td>
                    <button onClick={this.destroy}>x</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow