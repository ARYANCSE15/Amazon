import "./ProductCard.css"

import { Link } from "react-router-dom"

function ProductCard({ product, addToCart }) {

    return (

        <div className="product-card shadow-sm hover:shadow-xl">

            <img
                src={product.img}
                className="product-image"
                alt={product.name}
            />

            <div className="product-info">

                <div>

                    <h3 className="name">
                        {product.name}
                    </h3>

                    <p className="price">
                        ₹{product.price}
                    </p>

                </div>

                <div className="d-flex flex-column gap-3 mt-4">

                    <button
                        onClick={() => addToCart(product.id)}
                        className="cartadd"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductCard