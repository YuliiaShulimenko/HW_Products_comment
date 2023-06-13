import React from 'react';
import s from "./Sort.module.css";

function Sort({ minPrice, maxPrice }) {
  return (
    <div className={s.sort}>
      <button onClick={minPrice}>MIN</button>
      <button onClick={maxPrice}>MAX</button>
    </div>
  );
}

export default Sort;
