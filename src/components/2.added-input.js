import {  useState,  } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setENteredNameTouched] = useState(false);
  // const [formIsValid , setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim()  !== '';
  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputInvalid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  const nameInputChangehandler = (e) => {
    setEnteredName(e.target.value);
    
  };

  const nameInputBlurHandler = (e) => {
    setENteredNameTouched(true);
    
  }

  const emailInputChangehandler = (e) => {
    setEnteredEmail(e.target.value);
    
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
    
  }

  const fromSubmissionHandler = (e) => {
    e.preventDefault();

    setENteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!enteredNameIsValid){
      return;
    }
    
    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; /////=> NOT IDEAL , DON'T  MANUPULATE THE DOM
    setEnteredName('');
    setENteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

 

  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangehandler} 
          
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
     {nameInputInvalid &&  <p className="error-text">Name must not be empty</p>}

     <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangehandler} 
          
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
      </div>
     {emailInputInvalid &&  <p className="error-text">Please enter a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
