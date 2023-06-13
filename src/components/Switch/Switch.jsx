import React from 'react';
import s from "./Switch.module.css";

 {/* // шаблон переключателя скачала с  
        https://stackoverflow.com/questions/72012365/set-bootstrap-switch-component-to-checked-if-mode-is-dark*/}


export default function Switch({ handleSwitchChange, theme }) {
    return (
      <div>
        <label htmlFor="switch" className={s.switch}>
          <input
            className={s.switch_input}
            type="checkbox"
            id="switch"
            checked={theme === 'dark'}
            onChange={handleSwitchChange}
          />
          <span className={s.slider}></span>
        </label>
      </div>
    );
  }