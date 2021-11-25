import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let products = this.props.products
        console.log(products)
        let organizedProduct = products.reduce((acc, prod) => {
            let found = acc.find(group => group.category === prod.category)
            let item = { name: prod.name, price: prod.price }
            !found ? acc.push({ category: prod.category, items: [item]}) : found.items.push(item)
            return acc
        },[])
        return organizedProduct.map(group => {
            return (
                <div>
                    <ProductCategoryRow category={group.category} />
                    {group.items.map(item => {
                        return <ProductRow name={item.name} price={item.price} />
                    })}
                </div>
            ) 
        })
    }
}

export default ProductTable;