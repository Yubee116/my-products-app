import React from 'react'
import Filters from './filters'
import ProductTable from './productTable'
import ProductForm from './productForm'

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
    '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
} 

// console.log(PRODUCTS)
// let array = Object.keys(PRODUCTS).map((pid)=>PRODUCTS[pid])

// console.log(array)

class Products extends React.Component{
    render(){
        return(
            <div>
                <Filters />
                <ProductTable products={PRODUCTS}/>
                <ProductForm />
            </div>
        )
    }
}

export default Products;