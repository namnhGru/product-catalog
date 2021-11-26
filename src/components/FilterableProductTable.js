import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import React from 'react';
class FilterableProducTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredText: '',
            onlyInStock: false
        }
        this.handleOnlyInStockChange = this.handleOnlyInStockChange.bind(this)
        this.handleFilteredTextChange = this.handleFilteredTextChange.bind(this)
    }

    handleFilteredTextChange(filteredText) {
        this.setState({filteredText: filteredText})
    }

    handleOnlyInStockChange(onlyInStock) {
        this.setState({onlyInStock: onlyInStock})
    }

    render() {
        return (
            <div>
                <SearchBar filteredText={this.state.filteredText} onlyInStock={this.state.onlyInStock} handleFilteredTextChange={this.handleFilteredTextChange} handleOnlyInStockChange={this.handleOnlyInStockChange}/>
                <ProductTable filteredText={this.state.filteredText} onlyInStock={this.state.onlyInStock} /> 
            </div>
        );
    }
}

export default FilterableProducTable;