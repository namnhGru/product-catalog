import React from 'react';
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleTextChange(e) {
        this.props.handleFilteredTextChange(e.target.value)
    }

    handleCheckboxChange(e) {
        this.props.handleOnlyInStockChange(e.target.checked)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filteredText} onChange={this.handleTextChange} />
                <input type="checkbox" value={this.props.onlyInStock} onChange={this.handleOnlyInStockChange}/>
            </div>
        );
    }
}

export default SearchBar;