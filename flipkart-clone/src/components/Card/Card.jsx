import React from 'react'
import "./card.css"

function Card({items,brands, price, img, category,size,priceOriginal,priceDiscount,priceFinal}) {
  console.log("from card brands:", size)
  return (
    <div className="card">
     
      <div className="card--image">
        <img
          src={img}
          className="img-fluid"
          alt="Plant"
          width="200px"
          height="200px"
        />
      </div>

      <div className="card--body">
        <div className="card--details">
          <div className="card--title">{brands}</div>
          <div className="card--description">{category}</div>

          <div className="card-price">
          SIZE:
          {
            (size||[]).map(s=><b>{s}</b>)
          }
          </div>
          
          <div className="card-price">
            <div className="price-original">
              {"\u20B9"} {priceOriginal}
            </div>
            <div className="price-discounted">
              {"\u20B9"}{priceFinal}
            </div>
          </div>
            <div className="discount">{priceDiscount}% off</div>
        </div>

        
      </div>
    </div>
  )
}

export default Card