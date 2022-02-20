import React from 'react'
import ProductTableHeaders from './productTableHeaders'
import ProductRow from './productRow'

class ProductTable extends React.Component{
    render(){
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid])
        let rows = []
        //console.log(productsAsArray)

        productsAsArray.forEach((product) => {
            rows.push(
                <ProductRow product={product} key={product.id} />
            )
        })
        return(
            <div>
                <table>
                <thead>
                    <tr> 
                        <ProductTableHeaders column="name" />
                        {/* <ProductTableHeaders column="category"/>  */}
                        <ProductTableHeaders column="price"/>    
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                
                </table>
                
            </div>
        )
    }
}

export default ProductTable