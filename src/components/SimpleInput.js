import { useRef, useState, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValidating, setENteredNameValid] = useState(false);
  const [enteredNameTouched, setENteredNameTouched] = useState(false);



  useEffect(() => {
    if(enteredNameIsValidating){
      console.log('Name input is valid');
    }
  }, [enteredNameIsValidating]);


  const nameInputChangehandler = (e) => {
    setEnteredName(e.target.value);

    if(enteredName.trim() !== ''){
      setENteredNameValid(true);
      
    }
  };

  const nameInputBlurHandler = (e) => {
    setENteredNameTouched(true);

    if(enteredName.trim() === ''){
      setENteredNameValid(false);
      
    }
  }

  const fromSubmissionHandler = (e) => {
    e.preventDefault();

    setENteredNameTouched(true);
    
    if(enteredName.trim() === ''){
      setENteredNameValid(false);
      return;
    }
    
    setENteredNameValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; /////=> NOT IDEAL , DON'T  MANUPULATE THE DOM
    setEnteredName('');
  };

  const nameInputInvalid = !enteredNameIsValidating && enteredNameTouched;

  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangehandler} 
          ref={nameInputRef}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
     {nameInputInvalid &&  <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
