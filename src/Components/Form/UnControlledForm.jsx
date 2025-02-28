

import React ,{ useRef } from 'react'

function UnControlledForm() {
     const emailRef=useRef();
        const passwordRef=useRef();
    
        const handleSubmit=(event)=>{
            event.preventDefault();
    
            const emailValue=emailRef.current.value;
            const passwordValue=passwordRef.current.value;
    
            if(emailValue.length <3){
                alert("Email must be more than 3 characters");
                return;
            }
    
            if(passwordValue.length <3){
                alert("Password must be more than 3 characters");
                return;
            }
    
            if(emailValue.pattern !== "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]$"){
                alert("Enter a valid email address");
                return;
            }
    
        }
    return (
        <>
        <form style={styles.formstyle} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              ref={emailRef}
              required
              minLength={3}
              maxLength={70}
             
             
            />
           
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              ref={passwordRef}
              
            />
            
          </div>
  
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </form>
        </>
    )
}

export default UnControlledForm;
const styles = {

    formstyle:{
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        gap:"20px",
        margin: "40px" ,
        width:"50%",
       
    }
  }
  
