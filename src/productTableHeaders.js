import React from 'react'
import './productTableHeader.css'

class ProductTableHeaders extends React.Component{
    constructor(props){
        super(props)
        this.handleSort = this.handleSort.bind(this)
    }
    handleSort(e){
        this.props.onSort(this.props.column, e.target.name)
    }
    render(){
        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false

        return (
            <th>
                {this.props.column}
                <button 
                    className={currentSort === 'asc' ? "ProductTableHeader-current" : ''}
                    onClick={this.handleSort}
                    name="asc">&#x25B2;</button>
                <button
                    className={currentSort === 'desc' ? "ProductTableHeader-current" : ''}
                    onClick={this.handleSort}
                    name="desc">&#x25BC;</button>
            </th>
        )
    }
}


export default ProductTableHeaders