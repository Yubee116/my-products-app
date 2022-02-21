import React from 'react'
import ProductTableHeaders from './productTableHeaders'
import ProductRow from './productRow'

class ProductTable extends React.Component{
    constructor(props){
        super(props)
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this)
        this.sortProducts = this.sortProducts.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.state = {
            sort: {
                column: 'name',
                direction: 'asc'
            }
        }
    }
    handleEdit(product){
        this.props.editProduct(product)
    }
    handleDestroy(id){
        this.props.deleteProduct(id)
    }
    handleSort(column, direction){
        this.setState({
            sort: {
                column: column,
                direction: direction
            }
        })

    }
    sortByKeyAndOrder(objectA, objectB){
        let isAsc = this.state.sort.direction === 'asc' ? -1 : 1
        let [a,b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]]
        if (this.state.sort.column === 'price'){
            [a,b] =  [a,b].map((value)=> parseFloat(value.replace(/[^\d.]/g, ''), 10))
        }
        if (a < b){
            return 1 * isAsc
        }
        if (a > b){
            return -1 * isAsc
        }
        return 0

    }
    sortProducts(){
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid])
        return productsAsArray.sort(this.sortByKeyAndOrder)

    }
    render(){
        
        let rows = []

        this.sortProducts().forEach((product) => {
            if ((!product.stocked && this.props.inStockOnly) || (product.name.toLowerCase().indexOf(this.props.filterText) === -1)){
                return
            }
            rows.push(
                <ProductRow product={product} key={product.id} deleteProduct={this.handleDestroy} editProduct={this.handleEdit}/>
            )
        })
        return(
            <div>
                <table>
                <thead>
                    <tr> 
                        <ProductTableHeaders 
                            column="name" 
                            currentSort={this.state.sort}
                            onSort={this.handleSort}/>

                        <ProductTableHeaders 
                            column="price" 
                            currentSort={this.state.sort}
                            onSort={this.handleSort}/>    
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