import React, { useState } from 'react';
import {Product, productList } from './products';
import './Grocery.css';

interface TextState extends Product {
    [index: string]: string | number | boolean;
}


const Grocery: React.FC = () => {
    const [products, setProducts] = useState(productList);
    const [text, setText] = useState<TextState>({
        item: "",
        brand: "",
        units: "",
        quantity: 0,
        isPurchased: true,
    })

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setText({
            ...text,
            [e.currentTarget.name]: e.currentTarget.value
        })
    };

    const addProduct = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        // add item
       setProducts([...products, text]);
    }

    const remove = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        let lastProduct = products[products.length - 1]
        lastProduct.isPurchased = !lastProduct.isPurchased
        setProducts([...products, lastProduct]);

    }

    
    // const addProduct = (e: React.FormEvent<HTMLInputElement>): void => {
    //     // setState to add product
        
    // }
    return(
        <div className="main-container">
            <h2> Available Products: </h2>
            {products.map((product, i) => {
                return (product.isPurchased ? <div className="product" key={i}> Name: {product.item} | QT: {product.quantity} | Units: {product.units} </div> : null);
            })}
            <form className="form-container" onSubmit={addProduct}>
                <div className="form-item">
                    <label htmlFor="item">Item:</label>
                    <input type="text" name="item" onChange={onChange} />
                </div>
                <div className="form-item">
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" name="brand" onChange={onChange} />
                </div>
                <div className="form-item">
                    <label htmlFor="units">Units:</label>
                    <input type="text" name="units" onChange={onChange} />
                    </div>
                <div className="form-item">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" name="quantity" onChange={onChange} />
                </div>
                <div >
                    <input type="submit" value="Add Product"/>
                    {/* <button onClick={remove}>Remove</button> */}
                </div>

            </form>
        </div>
    ) 
}

export default Grocery;
