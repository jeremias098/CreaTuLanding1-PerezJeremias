import React from 'react'

function ItemListProduct({mensajeBienvenida}) {
  return (
    <div className="item-list-container">
    <h2>{mensajeBienvenida}</h2>
    <div className='product_container'>
        <div className="product">
            <div className="title_product">
                <h3>Title</h3>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlISr-4SDL9jOIgaednPPGU9gBagQv2igUuSOIyXok0Q&s" alt="campera" />
        </div>
        
        <div className="product">
            <div className="title_product">
                <h3>Title</h3>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlISr-4SDL9jOIgaednPPGU9gBagQv2igUuSOIyXok0Q&s" alt="campera" />
        </div>

        <div className="product">
            <div className="title_product">
                <h3>Title</h3>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlISr-4SDL9jOIgaednPPGU9gBagQv2igUuSOIyXok0Q&s" alt="campera" />
        </div>
    </div>
    
  </div>
  )
}

export default ItemListProduct