import React from "react";
import styles from '../css/UI.CSS/input_eye.module.scss'
import { useState } from "react";
function Input_eye () {
    const [eyeOn, setEyeOn] = useState(false);
    function onEyeClick() {
        setEyeOn(!eyeOn);
        console.log(eyeOn)
    }
  
 return (<label className={styles.password__label}>
 <input type={eyeOn ? "password" : "text"} className={styles.password__input_eye}></input>
 <div className={eyeOn ? styles.password__btn : "btn"} onClick={onEyeClick}>
    <img src="\assets\img\Frame 6 (1).png" alt='img'/>
    </div>
</label>)

}

export default Input_eye