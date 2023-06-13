import React from 'react'
import s from "./ProductsContainer.module.css"
import ProductItem from '../ProductItem/ProductItem'


function ProductsContainer({prod,delete_product}) {

  return (
    <div className={s.container_div}>
        {prod.map((elem) => (
        <ProductItem 
        {...elem} // распаковка массива ,сокращенный вариант,где достаются все имеющиеся ключи
        key={elem.id} // стандартная команда чтобы избавиться от варнинга
        delete_product={delete_product}  //снова передаем пропсами функцию удаления в компонент Продукт
        
        />
      ))}
      </div>
  )
}

export default ProductsContainer