import React, { useEffect, useState } from "react";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import { products } from "./products_data";
import Switch from "./components/Switch/Switch";
import s from "./App.module.css";
import AddForm from "./components/AddForm/AddForm";
import Sort from "./components/Sort/Sort";

function App() {
  const [prod, setProd] = useState(products); //стейт для отрисовки контейнера после удаления карточки, тк меняется содержимое

  // ===================== для SWITCH ============================
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); //стейт для переключателя темы

  //позволяет сохранять состояние выбранной темы даже после перезагрузки страницы чтобы она при перезагрузки не принимала первоначальное состояние
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  //для переключателя темы.Передаем пропсом в компонент свитч и вызываем там в ретерне,не забыть сверху в компонент в фигурные скобки ее тоже передать и theme
  const handleSwitchChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  // ===================== УДАЛЕНИЕ КАРТОЧКИ ============================

  //для удаления карточки.Далее эту функцию передаем пропсами как матрешка до самого Продукт Айтем через контейнер и в продукт айтем вызываем в ретерне
  const delete_product = (id) => {
    setProd(prod.filter((elem) => elem.id !== id));
  };

  // ===================== ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ ============================

  const add_product = (new_product) => setProd([...prod, new_product]); //состояние меняется таким образом= распоковывается массив с объектами продуктов и добавляется новый продует

  // ===================== СОРТИРОВКА ЦЕНЫ ПО ВОЗРАСТАНИЮ ============================
  const min_price = (id) => {
    setProd(prod.sort((a, b) => a.price - b.price));
  };

  // ===================== СОРТИРОВКА ЦЕНЫ ПО УБЫВАНИЮ ============================

  const max_price = (id) => {
    setProd(prod.sort((a, b) => b.price - a.price));
  };

  const sortProductsByMinPrice = () => {
   
setProd([...prod].sort((a, b) => a.price - b.price));
  };

const sortProductsByMaxPrice = () => {
      
setProd([...prod].sort((a, b) => b.price - a.price));
  };

  
  

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////   RETURN   ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

  return (
    <div className={`${s.night} ${theme === "dark" ? s.nightDark : ""}`}>
      {/* ********************Компонент для переключения темы **********************/}
      <div
        className={`${s.switch_div} 
        ${theme === "dark" ? s.switchDivDark : s.switch_div}`}
      >
        <h3
          className={`${s.switch_div} 
          ${theme === "dark" ? s.switchDivDarkH : s.switch_div}`}
        >
          DAY
        </h3>
        <Switch
          handleSwitchChange={handleSwitchChange} //передаю пропсами функцию переключения и тему
          theme={theme}
        />
        <h3
          className={`${s.switch_div} 
          ${theme === "dark" ? s.switchDivDarkH : s.switch_div}`}
        >
          NIGHT
        </h3>
      </div>
      {/* *************************Компонент Форма для добавления нового пользователя********************* */}
      <div>
        <AddForm add_product={add_product} />
      </div>
      <div
        className={`${s.app} 
        ${theme === "dark" ? s.appDark : ""}`}
      >
        {/* **************************Компонент-конопки сортировки цены в контейнере по мин и макс**************** */}
        <Sort
          minPrice={sortProductsByMinPrice}
          maxPrice={sortProductsByMaxPrice}
        />



        {/* **************************Компонент,где формируются все карточки продуктов***************** */}
        <ProductsContainer prod={prod} delete_product={delete_product} />
      </div>
    </div>
  );
}

export default App;
