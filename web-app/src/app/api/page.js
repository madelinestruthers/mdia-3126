"use client"
import { useState } from "react";

export default function Page() {
    // create a product page
    //create a header
    //create a button that requests data
    // request data
    // store data in my state (react state)
    // output the data

    const [products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

    async function fetchProducts() {
        const response = await fetch(API_ENDPOINT)
        //waiting for the response
        //taking the repsonse and assigning to another variable
        console.log(response);
        const data = await response.json();
        console.log(data);

        setProducts(data);
    }

    const ProductList = () => {
        if (products) {
            let productsList = [];
             products.forEach((product, index) => {
                 productsList.push(<li key={index}>{product.name}</li>)
            });

            return (
                <div className="border-4 border-black p-4 mb-4 text-black">
                 <ul>{productsList}</ul>
                </div>
            )}
        return <div>no products</div>
    }



    return (
        <div className="bg-yellow-300 p-4">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="text-4xl mb-6 text-black">product page</h1>
                <button
                    className="border-black border-2 p-2 bg-pink-700"
                    onClick={fetchProducts}>
                    Fetch products
                </button>
            </header>
            <ProductList />
        </div>
    );
}
