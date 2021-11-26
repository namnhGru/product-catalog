import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"
import products from '../products'

class ProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.filterProducts = this.filterProducts.bind(this)
        this.organizeProducts = this.organizeProducts.bind(this)
    }

    filterProducts(products) {
        let afterTextFilter = this.props.filteredText
                                ? products.filter(product => product.name.includes(this.props.filteredText))
                                : products
        let afterStockFilter = this.props.onlyInStock
                                ? afterTextFilter.filter(product => product.stocked === true)
                                : afterTextFilter 
        return afterStockFilter
    }

    organizeProducts(products) {
        return products.reduce((acc, prod) => {
            let found = acc.find(group => group.category === prod.category)
            let item = { name: prod.name, price: prod.price }
            !found ? acc.push({ category: prod.category, items: [item]}) : found.items.push(item)
            return acc
        },[])
    }

    render() {
        let organizedProduct = this.organizeProducts(this.filterProducts(products))
        return organizedProduct.map(group => {
            return (
                <div>
                    <ProductCategoryRow key={group.category} category={group.category} />
                    {group.items.map(item => {
                        return <ProductRow key={item.name} name={item.name} price={item.price} />
                    })}
                </div>
            ) 
        })
    }
}

export default ProductTable;