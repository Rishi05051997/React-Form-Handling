import {  useState,  } from "react";

export default function useInput(validateValue) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangehandler = (e) => {
        setEnteredValue(e.target.value);
    };


    const valueBlurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, 
        isValid : valueIsValid,
        hasError , 
        valueChangehandler, 
        valueBlurHandler,
        reset

    }
}
