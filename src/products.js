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

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''}
class Products extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            filterText: '',
            inStockOnly: false,
            products: PRODUCTS,
            formProduct: Object.assign({}, RESET_VALUES)
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }
    editProduct(product){
        this.setState({
            formProduct: Object.assign({}, product)
        })

    }

    deleteProduct(productId){
        this.setState((prevState)=>{
            let products = prevState.products
            delete products[productId]
            return {products}
        })

    }

    saveProduct(product){
        if (!product.id){
            product.id = new Date().getTime()
        }
        this.setState((prevState)=>{
            let products = prevState.products
            products[product.id] = product
            return {products}
        })

    }

    handleFilter(filterInput){
        this.setState(filterInput)
    }

    render(){
        return(
            <div>
                <Filters 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilter={this.handleFilter} 
                />
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    deleteProduct={this.deleteProduct}
                    editProduct={this.editProduct}/>
                <ProductForm onSave={this.saveProduct} formProduct={this.state.formProduct}/>
            </div>
        )
    }
}

export default Products;