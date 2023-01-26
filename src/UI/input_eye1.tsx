import { useState } from "react"
import React from "react";
import styles from "./input_eye.module.scss"
function InputEye(props:any) {
    interface eyeOnType {
        eyeOn: Boolean,
        setEyeOn: Boolean
    }
    const [eyeOn, setEyeOn] = useState(false);
    function onEyeClick():any {
        console.log(1)
        setEyeOn(!eyeOn);
       
    }
    console.log(eyeOn)
    console.log(styles.seePasswordEyeon)
    return (
        <span >
    <div className={styles.input + (props.seePassword ? styles.seePassword : '')}>
    <p className='login'>{props.label}</p>
    <input type={!eyeOn ?   'text' : 'password'} className={styles.logininput} onInput={props.onInput} /> 
    {!props.seePassword && <span className={ eyeOn ? styles.seePasswordEye : styles.seePasswordEyeon}  onClick={onEyeClick}>
    </span>
    }
    </div></span> )
}

// function InputEye(props:any) {
//     interface eyeOnType {
//         eyeOn: Boolean,
//         setEyeOn: Boolean
//     }
//     const [eyeOn, setEyeOn] = useState(false);
//     function onEyeClick() {
//         setEyeOn(!eyeOn);
//     }
//     return (
//         <span className="inpute_type">
//     <div className={"input" + (props.seePassword? "seePassword": '')}>
//     <p className='login'>{props.label}</p>
//     <input type={eyeOn ?   'text' : 'password'} className="logininput" onInput={props.onInput} /> 
//     {!props.seePassword && <span className={'seePasswordEye' + (eyeOn ?  "on" : "")}  onClick={onEyeClick}>
//     </span>}
//     </div></span> )
// }

export default InputEye