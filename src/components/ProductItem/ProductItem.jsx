import React from 'react'
import s from "./ProductItem.module.css"


function ProductItem({id,title,price,country,address,delete_product}) {
  return (
    <div className={s.product_div}>
      <p>Title: {title}</p>
      <p>Prise: {price} USD</p>
      <p>Country: {country}</p>
      <p>Address: {address.city} , {address.street}</p>

<button className={s.button} 
//иконка подключена не через импорт библиотеки ,а через скрипт в html
onClick={()=>delete_product(id)}> <i className="fa fa-trash"></i></button>


    </div>
  )
}

export default ProductItem