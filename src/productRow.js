import React from 'react'
import './productRow.css'

class ProductRow extends React.Component{
    constructor(props){
        super(props)
        this.destroy = this.destroy.bind(this)
        this.edit = this.edit.bind(this)
    }
    edit(){
        const product = {id: this.props.product.id, category: this.props.product.category, 
            price: this.props.product.price, stocked: this.props.product.stocked, name: this.props.product.name}
        
        this.props.editProduct(product)
        
    }
    destroy(){
        this.props.deleteProduct(this.props.product.id)
    }
    render(){
        return(
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'Product-out-of-stock'}>
                        {this.props.product.name}
                    </span>
                
                </td>
        
                <td>{this.props.product.price}</td>
                <td>
                    <button onClick={this.destroy}>x</button>
                </td>
                <td>
                    <button onClick={this.edit}>Edit</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow