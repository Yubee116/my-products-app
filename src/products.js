import React from 'react'
import Filters from './filters'
import ProductTable from './productTable'
import ProductForm from './productForm'

class Products extends React.Component{
    render(){
        return(
            <div>
                <Filters />
                <ProductTable />
                <ProductForm />
            </div>
        )
    }
}

export default Products;