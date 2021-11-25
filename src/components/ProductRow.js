import React from 'react';
class ProductRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.price}</td>
                </tr>
            </div>
        );
    }
}

export default ProductRow;