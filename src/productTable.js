import React from 'react'
import ProductTableHeaders from './productTableHeaders'
import ProductRow from './productRow'

class ProductTable extends React.Component{
    render(){
        return(
            <div>
                <ProductTableHeaders />
                <ProductRow />
            </div>
        )
    }
}

export default ProductTable