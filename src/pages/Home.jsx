import { useState } from "react"
import { toast } from "react-toastify"

import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

import products from "../data/products"

import "./Home.css"

function Home() {
  const [search, setSearch] = useState("")

  function addToCart(id) {
    let user = localStorage.getItem("user")
    if (!user) {
      toast.error("Please login first!")
      return
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let product = products.find(p => p.id === id)
    let existing = cart.find(item => item.id === id)

    if (existing) {
      existing.qty += 1
    } else {
      product.qty = 1
      cart.push(product)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success("Added To Cart")
    window.location.reload()
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      {}
      <div className="slider">
        <img 
          src="https://assets.hardwarezone.com/img/2023/06/Amazon_Fresh_for_all.jpg" 
          alt="Amazon Fresh Banner" 
        />
      </div>

      <section className="products">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </section>

      <Footer />
    </>
  )
}

export default Home
