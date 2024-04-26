import { useState } from "react"

const useInputValid = (validateValue)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValidate = validateValue(enteredValue);
    const hasError = !valueIsValidate && isTouched;


    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlureHandler = () => {
        setIsTouched(true);
    };
    
    const reset =()=>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value:enteredValue, 
        hasError:hasError,
        valueChangedHandler,
        inputBlureHandler,
        isValid:valueIsValidate,
        reset
    }
}
export default useInputValid;


