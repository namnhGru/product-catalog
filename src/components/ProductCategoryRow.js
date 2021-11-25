import React from 'react';
class ProductCategoryRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.category}</td>
                </tr>
            </div>
        );
    }
}

export default ProductCategoryRow;