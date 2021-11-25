import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import React from 'react';
import products from '../products'
class FilterableProducTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: products,
            filteredText: '',
            onlyInStock: false
        }
        this.handleOnlyInStockChange = this.handleOnlyInStockChange.bind(this)
        this.handleFilteredTextChange = this.handleFilteredTextChange.bind(this)
    }

    filteredProducts() {
        let filteredProducts = this.state.products
                                .filter(product => product.name.includes(this.state.filteredText))
                                .filter(product => product.stocked === this.state.onlyInStock)
        this.setState({products: filteredProducts})
    }

    handleFilteredTextChange(filteredText) {
        this.setState({filteredText: filteredText})
        this.filteredProducts()
    }

    handleOnlyInStockChange(onlyInStock) {
        this.setState({onlyInStock: onlyInStock})
        this.filteredProducts()
    }

    render() {
        return (
            <div>
                <SearchBar filteredText={this.state.filteredText} handleFilteredTextChange={this.handleFilteredTextChange} handleOnlyInStockChange={this.handleOnlyInStockChange}/>
                <ProductTable products={this.state.products} /> 
            </div>
        );
    }
}

export default FilterableProducTable;