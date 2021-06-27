import {useState, useRef, useEffect} from "react";




const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [nameIsValid, setNameIsvalid] = useState(false);
  const [nameInputTouched, setInputTouched] = useState(false);

  useEffect(() => {
    if(nameIsValid){
      console.log('Input is valid')
    }
  }, [nameIsValid])
  
  const inputChangehandler = (e) => {
   
    setEnteredName(e.target.value);
    if(enteredname.trim() !== ''){
      setNameIsvalid(true);
      
    }
  }

  const nameInputBlurHandler = (e) => {
    setEnteredName(true);
    if(enteredname.trim() === ''){
      setNameIsvalid(false);
     
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setInputTouched(true);
    if(enteredname.trim() === ''){
      setNameIsvalid(false);
      return;
    }

    console.log(enteredname);
    const enteredInputValue = nameInputRef.current.value;
    console.log(enteredInputValue);
  }

  const nameInputInvalid = !nameIsValid && nameInputTouched;
  const validationClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onFormSubmit}>
      <div className={validationClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={inputChangehandler}
          value={enteredname}
          ref={nameInputRef}
          onBlur={nameInputBlurHandler}
        />
        {nameInputInvalid && <p className="error-text">Please enter a Name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
