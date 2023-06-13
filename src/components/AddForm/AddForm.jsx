
import React from 'react';
import s from "./AddForm.module.css";

function AddForm({ add_product }) { //принимаем функцию добавления продукта из апп
  const handleSubmit = event => {  //вешаем слушатель события на форму.Форма будет собирать значения ,введенные в поля импут и добавлять в массив новый продукт
    event.preventDefault();  // стандартная команда для предотвращения перезагрузки страницы

    const { title, price, country, city,street } = event.target;

    const new_product = {
      id: Date.now(),
      title: title.value,
      price: price.value,
      country: country.value,
      address: {
        city: city.value,
        street: street.value
      }
    };
    

    add_product(new_product);
    event.target.reset(); // стандартная команда для очищения формы после отправки
  };

  return (
    <div className={s.form_title}>
      <h2 className={s.transparentText}>NEW PRODUCT</h2>
    <form onSubmit={handleSubmit} className={s.form}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="price" name="price" />
      <input type="text" placeholder="country" name="country" />
      <input type="text" placeholder="city" name="city" />
      <input type="text" placeholder="street" name="street" />

      <button>ADD</button>
    </form>
    </div>
  );
}

export default AddForm;
