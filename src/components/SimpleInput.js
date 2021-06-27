import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangehandler: nameChangeHandler, 
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput} = useInput(value => value.trim() !== '');

    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputhasError,
      valueChangehandler: emailChangehandler,
      valueBlurHandler : emailBlurHandler,
      reset: resetEmailInput
    } = useInput(value => value.includes('@'));
  // const nameInputRef = useRef();
  
  // const [formIsValid , setFormIsValid] = useState(false);

  

  

 


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

  // const nameInputChangehandler = (e) => {
  //   setEnteredName(e.target.value);
    
  // };

  // const nameInputBlurHandler = (e) => {
  //   setENteredNameTouched(true);
    
  // }

  

  const fromSubmissionHandler = (e) => {
    e.preventDefault();

   
    
    if(!enteredNameIsValid){
      return;
    }
    
    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; /////=> NOT IDEAL , DON'T  MANUPULATE THE DOM
    resetNameInput();

    resetEmailInput();

  };

 

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputhasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
     {nameInputHasError &&  <p className="error-text">Name must not be empty</p>}

     <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangehandler} 
          
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
     {emailInputhasError &&  <p className="error-text">Please enter a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
